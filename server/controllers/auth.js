'use strict';

const authNew = (passport) => {
  return (req, res, next) => {
    let oauthType = 'oauth2';
    if(req.params.oauthType === 'signin'){
      oauthType = 'oauth2-signin';
    }
    if(req.params.oauthType === 'signup'){
      oauthType = 'oauth2-signup';
    }
    let dataString = JSON.stringify({appName: req.params.appName, language: req.params.language});
    return passport.authenticate(oauthType, { scope: ['multifactor'], state: dataString })(req, res, next);
  }
};

const authCallback = (passport) => {
  return passport.authenticate('oauth2', { failureRedirect: '/auth/error'});
};

const authSuccess = (req, res, next, env = process.env.APP_ENV) => {
  let params = JSON.parse(req.query.state);
  req.session.user = req.user;

  res.cookie('appName', params.appName, {maxAge: 1200000});
  res.cookie('language', params.language, {maxAge: 1200000});

  let redirectURL = `/apply/logged-in/${req.user.uuid}`;
  if (env === 'development' && !process.env.APP_URL.match(/herokuapp/g)) {
    redirectURL = `http://localhost:3000/apply/logged-in/${req.user.uuid}`;
  }

  req.session.save((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect(redirectURL);
  });

};

const authError = (req, res) => {
  // TODO: static page with links to login?
  console.log('Oauth ID.me failed!');
}

module.exports = {
  authNew,
  authCallback,
  authSuccess,
  authError
};

'use strict';

const authNew = (passport) => {
  return (req, res, next) => {

    let _op_    = req.params.oauthType ? req.params.oauthType : 'signin';
    let _lang_  = req.params.language  ? req.params.language  : 'en';
    let oauthName  = 'oauth2' + '-' + _op_ + '-' + _lang_;

    let dataString = JSON.stringify({appName: req.params.appName, language: req.params.language});
    return passport.authenticate(oauthName, { scope: ['multifactor'], state: dataString })(req, res, next);
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
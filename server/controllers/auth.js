'use strict';

const authNew = (passport) => {
  return (req, res, next) => {

    let dataString = JSON.stringify({appName: req.params.appName, language: req.params.language});
    return passport.authenticate('oauth2', { scope: ['multifactor'], state: dataString })(req, res, next);
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

  if (env === 'development' && !process.env.APP_URL.match(/herokuapp/g)) {
    res.redirect(`http://localhost:3000/apply/logged-in/${req.user.uuid}`);
  }
  else {
    res.redirect(`/apply/logged-in/${req.user.uuid}`);
  }

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

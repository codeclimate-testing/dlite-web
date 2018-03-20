'use strict';

const authNew = (passport) => {
  return passport.authenticate('oauth2', { scope: ['multifactor'] });
};

const authCallback = (passport) => {
  return passport.authenticate('oauth2', { failureRedirect: '/auth/error'});
};

const authSuccess = (req, res) => {
  req.session.user = req.user; // is this right? or should be use a method in passport to do the serialization?
  res.cookie('isLoggedIn', true);

  let hostURL = req.headers.host;
  if (process.env.APP_ENV === 'development') {
    hostURL = 'http://localhost:3000';
  }
  res.redirect(`${hostURL}/apply/logged-in`);
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

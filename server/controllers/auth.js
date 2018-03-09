'use strict';

const authNew = (passport) => {
  return passport.authenticate('oauth2', { scope: ['multifactor'] });
};

const authCallback = (passport) => {
  return passport.authenticate('oauth2', { failureRedirect: '/auth/error' });
}

const authSuccess = (req, res) => {
  req.session.user = req.user; // is this right? or should be use a method in passport to do the serialization?
  res.redirect('/apply/welcome');
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

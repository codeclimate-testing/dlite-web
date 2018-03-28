'use strict';

const authNew = (passport) => {
  return passport.authenticate('oauth2', { scope: ['multifactor'] });
};

const authCallback = (passport) => {
  return passport.authenticate('oauth2', { failureRedirect: '/auth/error'});
};

const authSuccess = (req, res, next, env = process.env.APP_ENV) => {
  req.session.cookie.expires = false;
  req.session.user = req.user; // is this right? or should be use a method in passport to do the serialization?
  res.cookie('isLoggedIn', true);

  if (env === 'development' && !process.env.APP_URL.match(/herokuapp/g)) {
    res.redirect('http://localhost:3000/apply/logged-in');
  }
  else {
    res.redirect('/apply/logged-in');
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

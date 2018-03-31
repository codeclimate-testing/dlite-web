'use strict';

const logout = (req, res) => {
  console.log('log out')
  req.logout();
  req.session.destroy();
  res.cookie('isLoggedIn', false);
  let appName = req.cookies.appName;
  res.redirect('/apply/'+appName+'/sign-in');
};

module.exports = logout;
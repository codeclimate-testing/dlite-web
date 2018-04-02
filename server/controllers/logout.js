'use strict';

const logout = (req, res) => {
  console.log('log out');
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  res.cookie('isLoggedIn', false);

  res.redirect(`/apply/${appName}/sign-in`);
};

module.exports = logout;
'use strict';

const logout = (req, res) => {
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  res.cookie('isLoggedIn', false);
  if (!appName) {
    res.redirect('/');
  }
  res.redirect(`/apply/${appName}/sign-in`);
};

module.exports = logout;
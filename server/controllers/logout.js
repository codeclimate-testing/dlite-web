'use strict';

const logout = (appName) => {
  return (req, res) => {
    req.logout();
    req.session.destroy();
    res.cookie('isLoggedIn', false);
    res.redirect(`/apply/${appName}/sign-in`);
  };
};

module.exports = logout;
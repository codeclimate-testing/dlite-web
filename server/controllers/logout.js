'use strict';

const logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.cookie('isLoggedIn', false);
  return res.send();
};

module.exports = logout;
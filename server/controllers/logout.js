'use strict';

const logout = (req, res) => {
  console.log('LOGOUT')
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  if (!appName || appName.length < 1) {
    res.redirect('/apply/choose-language');
  } else {
    res.redirect(`/apply/${appName}/sign-in`);
  }
};

module.exports = logout;
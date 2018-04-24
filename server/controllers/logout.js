'use strict';

const logout = (req, res) => {
  console.log(`IP ${req.ip} logged out at ${new Date()}. TST app: ${process.env.TST_ENV}, ADA app: ${process.env.APA_TST}`);
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  res.clearCookie('appName');
  //res.clearCookie('dlite-web-session');

  if (!appName || appName.length < 1) {
    res.redirect('/apply/choose-language');
  } else {
    res.redirect(`/apply/${appName}/sign-in`);
  }
};

module.exports = logout;

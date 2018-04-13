'use strict';

const logout = (req, res) => {
  console.log(`IP ${req.ip} logged out at ${new Date()}. TST app: ${process.env.TST_ENV}, ADA app: ${process.env.APA_TST}`);
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  res.clearCookie('appName');
  //res.clearCookie('dlite-web-session');

  if(process.env.TST_ENV && process.env.TST_ENV.toString() === 'true') {
    res.redirect(process.env.TST_SPLASH_SCREEN_URL);
  }

  else {
    res.redirect('/apply/choose-language');
  }

};

module.exports = logout;

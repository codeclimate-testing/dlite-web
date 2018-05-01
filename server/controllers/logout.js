'use strict';

const logout = (req, res) => {
  console.log(`IP ${req.ip} logged out at ${new Date()}. TST app: ${process.env.TST_ENV}, ADA app: ${process.env.APA_TST}`);

  if (req.session) {
    req.logout();
    req.session.destroy();
  }

  res.clearCookie('appName');
  res.clearCookie('dlite-web-session');

  const TSTNotADA = process.env.TST_ENV && process.env.TST_ENV.toString() === 'true' && process.env.ADA_TST.toString() === 'false';
  if (TSTNotADA) {
    res.redirect(process.env.TST_SPLASH_SCREEN_URL.toString());
  }
  else {
    res.redirect('/apply/choose-language');
  }

};

module.exports = logout;

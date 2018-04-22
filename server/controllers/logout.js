'use strict';

const logout = (req, res) => {
  console.log('LOGOUT')

  if (req.session) {
    req.logout();
    req.session.destroy();
  }

  res.clearCookie('appName');
  //res.clearCookie('dlite-web-session');

  const TSTNotADA = process.env.TST_ENV && process.env.TST_ENV.toString() === 'true' && process.env.ADA_TST.toString() === 'false';
  if (TSTNotADA) {
    res.redirect(process.env.TST_SPLASH_SCREEN_URL.toString());
  }
  else {
    res.redirect('/apply/choose-language');
  }

};

module.exports = logout;

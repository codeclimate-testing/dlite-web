'use strict';

const logout = (req, res) => {
  console.log('LOGOUT')

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

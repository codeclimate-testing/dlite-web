'use strict';

const logout = (req, res) => {
  console.log('LOGOUT')

  req.logout();
  req.session.destroy();
  res.clearCookie('appName');
  //res.clearCookie('dlite-web-session');

  if (process.env.APP_MODE.toString() === 'tst') {
    res.redirect(process.env.LOGOUT_URL.toString());
  }
  else {
    res.redirect('/apply/choose-language');
  }

};

module.exports = logout;

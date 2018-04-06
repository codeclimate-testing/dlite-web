'use strict';

const logout = (req, res) => {
  let appName = req.cookies.appName;
  console.log('going to redirect to sign in for: ' + appName);
  req.logout();
  req.session.destroy();
  if (!appName || appName.length < 1) {
    res.redirect('/apply/choose-language');
  } else {
    console.log('calling redirect');
    res.redirect(`/apply/${appName}/sign-in`);
  }
};

module.exports = logout;
'use strict';

const logout = (req, res) => {
  console.log('log out');
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  res.cookie('isLoggedIn', false);
  // let url = `${req.protocol}://${req.get('host')}/apply/${appName}/sign-in`;
  // res.status(200).send(url);
  res.redirect('/apply/'+appName+'/sign-in');
};

module.exports = logout;
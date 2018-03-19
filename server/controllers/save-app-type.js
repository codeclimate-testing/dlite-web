'use strict';

module.exports = function chooseApp(req, res, next) {
  console.log('choose app');
  req.session.returnTo = `/apply/${req.params.app}/legal-name`;

  req.session.save(() => {
    next();
  })
  //res.cookie('chooseApp', req.params.app, { expires: new Date(new Date().getTime() + 4000000), signed: true, secure: true});

};
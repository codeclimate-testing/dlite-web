'use strict';
const isIntro = (url) => {
  let introPages = ['index.html', 'id-and-license/sign-in', 'cdl/sign-in', 'choose-language', 'choose-application', 'links', 'summary', 'cdl/summary'];
  for (var i = 0; i < introPages.length; i++) {
    if(`/apply/${introPages[i]}` === url){
      return true;
    }
  }
  return false;
};

const isProduction = () => {
  let env = process.env.APP_ENV;
  return  env !== 'development' &&
          env !== 'test' &&
          env !== 'acceptance';
};

module.exports = function ensureAuthenticated(req, res, next) {
  if (!isProduction()|| req.isAuthenticated() || isIntro(req.url)) {
    return next();
  }

  let appName = req.url.split('/')[2];
  return res.redirect(`/apply/${appName}/sign-in`);
};
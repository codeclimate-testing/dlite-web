'use strict';
const intro = (url) => {
  let introPages = ['chooseLanguage', 'chooseApplication', 'links', 'summary', 'cdl/summary'];
  for (var i = 0; i < introPages.length; i++) {
    if(`/apply/${introPages[i]}` === url){
      return true;
    }
  }
  return false;
}

module.exports = function ensureAuthenticated(req, res, next) {
  if (process.env.APP_ENV === 'development' ||  req.isAuthenticated() || intro(req.url)) { return next(); }
  // uncomment the line below after cdl sign-in story is merged
  //res.redirect(`/apply/${req.cookies.appName}/log-in`);
  return res.redirect('/apply/id-and-license/sign-in');
};
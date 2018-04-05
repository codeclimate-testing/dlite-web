'use strict';

module.exports = function sameUserOnly(req, res, next) {
  let isTheSame;
  console.log('is the same');
  if (process.env.APP_ENV === 'development' || process.env.APP_ENV === 'test') {
    isTheSame = true;
  } else {
    isTheSame = req.params.uuid === req.session.user.uuid;
  }
  console.log(isTheSame)
  if (isTheSame) {
    return next();
  }
  else {
    return res.status(500).send();
  }
};
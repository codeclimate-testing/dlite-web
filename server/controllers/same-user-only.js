'use strict';

module.exports = function sameUserOnly(req, res, next) {
  let isTheSame;
  if (process.env.APP_ENV === 'development' || process.env.APP_ENV === 'test') {
    isTheSame = true;
  } else {
    isTheSame = req.params.uuid.toString() === req.session.user.uuid.toString();
  }

  if (isTheSame) {
    next();
  }
  else {
    res.status(401).json({message: 'not same user'});
  }
};
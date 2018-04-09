'use strict';

module.exports = function sameUserOnly(req, res, next, env = process.env.APP_ENV) {
  let isTheSame;
  if (env === 'development' || env === 'test') {
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
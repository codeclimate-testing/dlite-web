'use strict';

module.exports = (user, done) => {
  done(null, user.uuid);
};

'use strict';

const fs = require('fs');

module.exports = function(world) {
  world.and('let me see that', function(done) {
    let page = world.browser
      .html()
      .log()
      .screenshot('debug.png')
      .then(() => { done(); });
  });
};

'use strict';

const fs = require('fs');

module.exports = function(world) {
  world.and('let me see that', function(done) {
    let page = world.browser.html();
    fs.writeFile(__dirname + '/../support/debug.html', page, done);
  });
};

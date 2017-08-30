'use strict';

module.exports = function teardown(world, callback) {
  world.browser.end(function() {
    world.server.close(callback);
  });
};


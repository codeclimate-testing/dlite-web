'use strict';

module.exports = function teardown(world, callback) {
  world.browser.close(function() {
    world.server.close(callback);
  });
};


'use strict';

module.exports = function teardown(world, callback) {
  world.browser.close();
  world.server.close();
  callback();
};


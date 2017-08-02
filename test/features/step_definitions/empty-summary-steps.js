'use strict';

module.exports = function(world) {
  world.given('I go to the new online DL application', function(done) {
    done(world.pending());
  });

  world.when('I visit \'/summary\'', function(done) {
    done(world.pending());
  });

  world.then('I should see a message \'No information has been entered yet\'', function(done) {
    done(world.pending());
  });
};

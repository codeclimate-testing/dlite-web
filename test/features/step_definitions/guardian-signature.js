'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('My guardian enters his/her details', function(done){
    browser
    .click('label[for="isSigned-signElectronically"]')
    .click('label[for="acceptLiabilities_0"]')
    .type('#name_0', 'GuardianSignature')
    .type('#month_0', '10')
    .type('#day_0', '4')
    .type('#year_0', '2018')
    .type('#phoneNumber_0', '(616)-923-1221')
    .type('#guardian_0Street_1', '865 Main Street')
    .type('#guardian_0Street_2', 'Unit no. 05')
    .type('#guardian_0City', 'Crazidino Here')
    .select('#guardian_0State', 'CA')
    .type('#guardian_0Zip', '94000')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my guardian details in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('GuardianSignature'), 'parent/guardian signature missing ');
      assert(text.includes('10'), 'parent/guardian signature month missing');
      assert(text.includes('4'), 'parent/guardian signature day missing');
      assert(text.includes('2018'), 'parent/guardian signature year missing');
      assert(text.includes('(616)-923-1221'), 'parent/guardian phone number missing');
      assert(text.includes('865 Main Street'), 'parent/guardian street address missing');
      assert(text.includes('Unit no. 05'), 'parent/guardian apt number missing');
      assert(text.includes('Crazidino Here'), 'parent/guardian city missing');
      assert(text.includes('CA'), 'parent/guardian state missing');
      assert(text.includes('94000'), 'parent/guardian zip code missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

}



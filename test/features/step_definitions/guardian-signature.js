'use strict';

const assert = require('assert');

module.exports = function(world) {
  let browser = world.browser;

  world.and('My guardian enters his/her details', function(done){
    browser
    .click('label[for="isSignedYes"]')
    .click('label[for="acceptLiabilities_0"]')
    .type('#signature', 'GuardianSignature')
    .type('#signatureDateMonth', '10')
    .type('#signatureDateDay', '4')
    .type('#signatureDateYear', '2018')
    .type('#phoneNumber', '(616)-923-1221')
    .type('#guardianStreet_1', '865 Main Street')
    .type('#guardianStreet_2', 'Unit no. 05')
    .type('#guardianCity', 'Crazidino Here')
    .select('#guardianState', 'CA')
    .type('#guardianZip', '94000')
    .type('#IDNumber', 'XYZ12344321')
    .type('#IDIssuedBy', 'U.S.A.')
    .type('#IDExpirationDateMonth', '10')
    .type('#IDExpirationDateDay', '14')
    .type('#IDExpirationDateYear', '2020')
    .then(() => { done(); })
    .catch(done);
  });

  world.then('I will see my guardian details in summary', function(done){
    browser
    .text()
    .then((text) => {
      assert(text.includes('Parent/guardian available: Yes'), 'parent/guardian signature choice missing');
      assert(text.includes('Accept Liabilities: Yes'), 'parent/guardian liability acceptance missing');
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
      assert(text.includes('XYZ12344321'), 'parent/guardian ID number missing');
      assert(text.includes('U.S.A.'), 'parent/guardian ID issued-by missing');
      assert(text.includes('10'), 'parent/guardian ID expiration month missing');
      assert(text.includes('14'), 'parent/guardian ID expiration day missing');
      assert(text.includes('2020'), 'parent/guardian ID expiration year missing');
    })
    .then(() => { done(); })
    .catch(done);
  });

}



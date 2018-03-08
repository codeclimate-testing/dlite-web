'use strict'

const assert = require('assert');
const parser = require('../../../../server/models/oauth/profile');
const dataHelper = require('../../../support/data-helper');

describe('Oauth Profile, id.me profile data parser', () => {
  const data = dataHelper.fakeUserData();

  it('parses id.me user profie data into normalized json structure', () => {
    let profile = parser.parse(data);
    assert.deepEqual(profile, {
      'full_name': 'Test Success',
      'uuid': 'd733a89e2e634f04ac2fe66c97f71612',
      'email': 'test.user@id.me'
    });
  });

  it('parses a json string, when it recieves that instead of a js object', function() {
    let profile = parser.parse(JSON.stringify(data));
    assert.deepEqual(profile, {
      'full_name': 'Test Success',
      'uuid': 'd733a89e2e634f04ac2fe66c97f71612',
      'email': 'test.user@id.me'
    });
  });
});

'use strict';

function fakeUserData() {
  return {
    "attributes": [
      {
        "handle": "full_name",
        "name": "First Name",
        "value": "Test Success"
      },
      {
        "handle": "email",
        "name": "Email",
        "value": "test.user@id.me"
      },
      {
        "handle": "uuid",
        "name": "Unique Identifier",
        "value": "d733a89e2e634f04ac2fe66c97f71612"
      }
    ],
    "status": []
  };
};


module.exports = fakeUserData;
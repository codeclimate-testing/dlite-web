'use strict';

const assert            = require('assert');
const userDataParser    = require('../../../../server/models/parsers/user-data');

describe('userData', function() {

  let records, data;
  beforeEach(function() {
    records = {
      applications: [
        {
          id: '1',
          first_name: 'Ellen',
          last_name: 'Pao',
          suffix_name: '',
          updated_at: '2018-04-11 10:18:27.12122-07',
          completed_at: '2018-04-11 10:18:27.12122-07',
          pathname: '/apply/id-and-license/my-history/medical-history'
        },
        {
          id: '2',
          first_name: 'Oprah',
          last_name: 'Winfrey',
          suffix_name: '',
          updated_at: '2017-04-11 10:18:27.12122-07',
          completed_at: '2017-04-11 10:18:27.12122-07',
          pathname: '/apply/cdl/my-basics/date-of-birth'
        }
      ],
      cards: [
        {
          application_id: '1',
          type: 'ID',
          id: '4'
        },
        {
          application_id: '1',
          type: 'DL',
          id: '5'
        },
        {
          application_id: '2',
          type: 'CDL',
          id: '6'
        }
      ],
      card_options: [
        {
          card_id: '4',
          option_type: 'action',
          option_value: 'change-update'
        },
        {
          card_id: '4',
          option_type: 'modification',
          option_value: 'senior_id'
        },
        {
          card_id: '5',
          option_type: 'action',
          option_value: 'replace-lost'
        },
        {
          card_id: '6',
          option_type: 'action',
          option_value: 'renew'
        }
      ]
    };

    data = userDataParser(records);
  });

  it('returns an object with appsLength value equal to the number of applications with the user_id', function() {
    assert.equal(data.appsLength, 2);
  });


  describe('apps array', function() {
    it('each object has the name of the person associated with each application', function() {
      assert.equal(data.apps[0].name, 'Ellen Pao ');
      assert.equal(data.apps[1].name, 'Oprah Winfrey ');
    });

    it('each object has a cardAction array with the card_option action option_values for the cards associated with that application', function() {
      assert.ok(data.apps[0].cardAction.includes('change-update'));
      assert.ok(data.apps[0].cardAction.includes('replace-lost'));
      assert.ok(!data.apps[0].cardAction.includes('senior_id'));
      assert.ok(data.apps[1].cardAction.includes('renew'));
    });

    it('each object has a cardType array with the cards type values for the cards associated with that application', function() {
      assert.ok(data.apps[0].cardType.includes('ID'));
      assert.ok(data.apps[0].cardType.includes('DL'));
      assert.ok(data.apps[1].cardType.includes('CDL'));
    });

    it('each object has an completedAt timestampe', function() {
      assert.equal(data.apps[0].completedAt, '2018-04-11 10:18:27.12122-07');
      assert.equal(data.apps[1].completedAt, '2017-04-11 10:18:27.12122-07');
    });

    it('each object has the pathname where the application was last at', function() {
      assert.ok(data.apps[0].pathname, records.applications[0].pathname);
      assert.ok(data.apps[1].pathname, records.applications[1].pathname);
    });
  });
});

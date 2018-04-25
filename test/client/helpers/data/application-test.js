'use strict';

import assert from 'assert';

import {
  languageIsSelected,
  buildConfCode,
  isProduction,
  requireLogIn,
  afterIntro,
  hasMultipleApps,
  parseAppName,
  parseChooseApp,
  sameType,
  getFlow,
  addOrEdit,
  addOrEditIcon,
  getTimeStamp
} from '../../../../client/helpers/data/application';

describe('Data helpers for application', function() {
  describe('#languageIsSelected', function() {
    it('is true when string exists', function() {
      assert.equal(languageIsSelected('en'), true);
    });

    it('is false when value is blank', function() {
      assert.equal(languageIsSelected(''), false);
    });
  });

  describe('#buildConfCode', function() {
    it('returns the first 8 digits of application id with an added dash in the middle and letters in uppercase', function() {
      let props = {
        id: '2b417380-20d6-11e8-9fbd-ef21805fde52'
      };
      assert.equal(buildConfCode(props), '2B41-7380');
    });
  });

  describe('#isProduction', function() {
    it('returns true if env is production', function() {
      assert.equal(isProduction('production'), true);
    });
  });

  describe('#requireLogIn', function() {
    let url, isLoggedIn;
    beforeEach(function() {
      url = '';
      isLoggedIn = false;
    });

    it('returns false if pathname is an intro page', function() {
      url = '/apply/choose-application';
      assert.equal(requireLogIn(url, isLoggedIn), false);
    });
    it('returns false if user is logged in', function() {
      isLoggedIn = true;
      assert.equal(requireLogIn(url, isLoggedIn), false);
    });
    it('returns true if user is not logged in and the pathname is not an intro page', function() {
      url = '/apply/summary';
      assert.equal(requireLogIn(url, isLoggedIn, 'production'), true);
    });
  });

  describe('#afterIntro', function() {
    it('returns false if page is an intro page', function() {
      assert.equal(afterIntro('/apply/choose-application'), false);
    });
    it('returns true if page is not an intro page', function() {
      assert.equal(afterIntro('/apply/id-and-license/legal-name'), true);
    });
  });

  describe('#hasMultipleApps', function() {
    let props;
    beforeEach(function() {
      props = {
        userData: {
          appsLength: 0
        }
      }
    });

    it('returns true if appsLength is greater than 0', function() {
      props.userData.appsLength = 2;
      assert.equal(hasMultipleApps(props), true);
    });
    it('returns true if appsLength is 1', function() {
      props.userData.appsLength = 1;
      assert.equal(hasMultipleApps(props), true);
    });
    it('returns false if appsLength is 0', function() {
      props.userData.appsLength = 0;
      assert.equal(hasMultipleApps(props), false);
    });
  });

  describe('#parseAppName', function() {
    let props;
    beforeEach(function() {
      props = {
        chooseApp: '',
        location: {
          pathname: ''
        }
      };
    });
    it('returns id-and-license when props.chooseApp is iddl', function() {
      props.chooseApp = 'iddl';
      assert.equal(parseAppName(props), 'id-and-license');
    });
    it('returns cdl when props.chooseApp is cdl', function() {
      props.chooseApp = 'cdl';
      assert.equal(parseAppName(props), 'cdl');
    });
    it('returns pathname when it is neither', function() {
      props.chooseApp = '';
      props.location.pathname = '/apply/id-and-license/sign-in';
      assert.equal(parseAppName(props), 'id-and-license');
    });
  });

  describe('#parseChooseApp', function() {
    it('returns iddl when appName is id-and-license', function() {
      assert.equal(parseChooseApp('id-and-license'), 'iddl');
    });
    it('returns cdl when appName is cdl', function() {
      assert.equal(parseChooseApp('cdl'), 'cdl');
    });
  });

  describe('#sameType', function() {
    let props;
    beforeEach(function() {
      props = {
        userData: {
          apps: [{
            cardType: []
          }]
        },
        appName: ''
      }
    });

    it('returns true if first cardType is DL and saved appName cookie is id-and-license', function() {
      props.userData.apps[0].cardType[0] = 'DL';
      props.appName = 'id-and-license';
      assert.equal(sameType(props), true);
    });

    it('returns true if first cardType is ID and saved appName cookie is id-and-license', function() {
      props.userData.apps[0].cardType[0] = 'ID';
      props.appName = 'id-and-license';
      assert.equal(sameType(props), true);
    });

    it('returns true if first cardType is CDL and saved appName cookie is CDL', function() {
      props.userData.apps[0].cardType[0] = 'CDL';
      props.appName = 'cdl';
      assert.equal(sameType(props), true);
    });

    it('returns false if first cardType is CDL and saved appName cookie is id-and-license', function() {
      props.userData.apps[0].cardType[0] = 'CDL';
      props.appName = 'id-and-license';
      assert.equal(sameType(props), false);
    });

    it('returns false if first cardType is ID and saved appName cookie is CDL', function() {
      props.userData.apps[0].cardType[0] = 'ID';
      props.appName = 'CDL';
      assert.equal(sameType(props), false);
    });
  });

  describe('#addOrEdit', function() {
    let props = {
      linkType: ''
    };

    it('returns 2nd arg if linkType is summary-add', function() {
      props.linkType = 'summary-add';
      assert.equal(addOrEdit(props, 'Add', 'Edit'), 'Add');
    });
    it('returns 2nd arg if linkType is open-add', function() {
      props.linkType = 'open-add';
      assert.equal(addOrEdit(props, 'Add', 'Edit'), 'Add');
    });
    it('returns 3rd arg if linkType is summary-edit', function() {
      props.linkType = 'summary-edit';
      assert.equal(addOrEdit(props, 'Add', 'Edit'), 'Edit');
    });
    it('returns 3rd arg if linkType is open-add', function() {
      props.linkType = 'open-edit';
      assert.equal(addOrEdit(props, 'Add', 'Edit'), 'Edit');
    });
  });

  describe('#getFlow', function() {
    let linkType;
    beforeEach(function() {
      linkType = '';
    });

    it('returns blank if linkType starts with open', function() {
      linkType = 'open-edit';
      assert.equal(getFlow(linkType), '');
    });

    it('returns Add if linkType is summary-add', function() {
      linkType = 'summary-add';
      assert.equal(getFlow(linkType), 'add');
    });

    it('returns Edit if linkType is summary-edit', function() {
      linkType = 'summary-edit';
      assert.equal(getFlow(linkType), 'edit');
    });

  });

  describe('#addOrEditIcon', function() {
    let props = {
      linkType: ''
    };

    it('returns edit if linktype is not open-add', function() {
      props.linkType = 'summary-add';
      assert.equal(addOrEditIcon(props), 'edit');
    });

    it('returns add if linktype is open-add', function() {
      props.linkType = 'open-add';
      assert.equal(addOrEditIcon(props), 'add');
    });
  });

  describe('#getTimeStamp', function() {
    let app;
    describe('completed application', function() {
      beforeEach(function() {
        app = {
          completedAt: '2018-04-11 10:18:27.12122-07'
        };
      });

      it('returns month/day/year string', function() {
        assert.equal(getTimeStamp(app), 'Submitted: 4/11/2018');
      });
    });

    describe('incomplete application', function() {
      beforeEach(function() {
        app = {
          updatedAt: '2018-04-11 10:18:27.12122-07',
          completedAt: ''
        };
      });

      it('returns Open', function() {
        let nextAddress = '/apply/cdl/my-basics/date-of-birth';
        assert.equal(getTimeStamp(app, nextAddress), 'Open');
      });
    });

  });
});
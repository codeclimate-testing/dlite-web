'use strict';

const assert = require('assert');

import {
  getTextFromState,
  getActionFromState,
  hasChosenApp,
  editMode,
  addOrEdit,
  addOrEditFlow,
  goToCardHistory,
  nextOrSummary,
  applyEditOrAddPath,
  applyOrEditCDLPath,
  getAppKey,
  signInURL
} from '../../../../client/helpers/data/pathnames';


describe('Data helpers for pathnames', function() {

  let props;
  beforeEach(function() {
    props = {
      flow: ''
    };
  });

  describe('#getTextFromState', function() {
    const iddlText = 'normal flow';
    const altText = 'adding or editing card';

    it('returns 2nd argument if user is not editing or adding card', function() {
      assert.equal(getTextFromState(props, iddlText, altText), iddlText);
    });
    it('returns 3rd argument if user is editing card', function() {
      props.flow = 'edit';
      assert.equal(getTextFromState(props, iddlText, altText), altText);
    });
    it('returns 3rd argument if user is adding card', function() {
      props.flow = 'add';
      assert.equal(getTextFromState(props, iddlText, altText), altText);
    });
  });


  describe('#getActionFromState', function() {
    let state;
    beforeEach(function() {
      state = {
        application: {
          cardAction: 'default',
          DLApp: {
            action: 'DL action'
          },
          IDApp: {
            action: 'ID action'
          },
          cardType: ''
        },
        ui: {
          flow: ''
        }
      };
    });
    describe('##normal flow', function() {
      it('returns the default cardAction if page is regular flow', function() {
        assert.equal(getActionFromState(state), state.application.cardAction);
      });
    });
    describe('##editing', function() {
      beforeEach(function() {
        state.ui.flow = 'edit';
      });
      it('returns the DLApp action if user is editing DL card', function() {
        state.application.cardType = ['DL'];
        assert.equal(getActionFromState(state), state.application.DLApp.action);
      });
      it('returns the IDApp action if user is editing ID card', function() {
        state.application.cardType = ['ID'];
        assert.equal(getActionFromState(state), state.application.IDApp.action);
      });
    });
    describe('##adding', function() {
      beforeEach(function() {
        state.ui.flow = 'add';
      });
      it('returns the DLApp action if user is adding DL card', function() {
        state.application.cardType = ['DL'];
        assert.equal(getActionFromState(state), state.application.DLApp.action);
      });
      it('returns the IDApp action if user is adding ID card', function() {
        state.application.cardType = ['ID'];
        assert.equal(getActionFromState(state), state.application.IDApp.action);
      });
    });
  });

  describe('#hasChosenApp', function() {
    it('returns true if props.chooseApp equals "cdl"', function() {
      let props = {
        chooseApp: 'cdl'
      };
      assert.equal(hasChosenApp(props), true);
    });
    it('returns true if props.chooseApp equals "iddl"', function() {
      let props = {
        chooseApp: 'iddl'
      };
      assert.equal(hasChosenApp(props), true);
    });
    it('returns false if props.chooseApp is blank', function() {
      let props = {
        chooseApp: ''
      };
      assert.equal(hasChosenApp(props), false);
    });
  });

  describe('#editMode', function() {
    it('returns true if page has validateFromSummary property that is true', function() {
      let props = {
        addressName: 'legalName'
      };
      assert.equal(editMode(props), true);
    });

    it('returns false if page does not have validateFromSummary property', function() {
      let props = {
        addressName: 'reducedFeeID'
      };
      assert.equal(editMode(props), false);
    });
  });

  describe('#addOrEdit', function() {
    it('returns "Add" if props have add key', function() {
      props.add = true;
      assert.equal(addOrEdit(props, 'Add', 'Edit'), 'Add');
    });
    it('returns "Edit" if props does not have add key', function() {
      assert.equal(addOrEdit(props, 'Add', 'Edit'), 'Edit');
    });
  });

  describe('#addOrEditFlow', function() {
    it('returns blank if props has an appID', function() {
      props.appID = '100';
      assert.equal(addOrEditFlow(props, 'Add', 'Edit'), '');
    });
    it('returns "Add" if props have add key', function() {
      props.add = true;
      assert.equal(addOrEditFlow(props, 'Add', 'Edit'), 'Add');
    });
    it('returns props.flow value if props has flow key', function() {
      props.flow = ''
      assert.equal(addOrEditFlow(props), '');
    });

    it('returns "Edit" if props does not have add key or flow key', function() {
      props = {
        editKey: ''
      };
      assert.equal(addOrEditFlow(props, 'Add', 'Edit'), 'Edit');
    });
  });

  describe('#goToCardHistory', function() {
    beforeEach(function() {
      props.cardAction = '';
      props.licenseAndIdHistory = {
        DLIDNumber: '',
        month: '',
        day: '',
        year: '',
        isIssued: '',
        issuedBy: ''
      }
    });


    it('returns false if user has an existing card', function() {
      props.cardAction = 'renew';
      assert.equal(goToCardHistory(props), false);
    });
    it('returns false if user has a new card but has already entered licenseAndIdHistory', function() {
      props.cardAction = 'new';
      props.licenseAndIdHistory.isIssued = 'No';
      assert.equal(goToCardHistory(props), false);
    });
    it('returns true if user has a new card and has not entered any license and id history', function() {
      props.cardAction = 'new';
      assert.equal(goToCardHistory(props), true);
    });
  });

  describe('#nextOrSummary', function() {
    it('returns a function', function() {
      assert.equal(typeof(nextOrSummary('nextKey')), 'function');
    });
    it('returns "summary" when user is editing card', function() {
      props.flow = 'edit';
      assert.equal(nextOrSummary('nextKey')(props), 'summary');
    });
    it('returns "summary" when user is adding card', function() {
      props.flow = 'add';
      assert.equal(nextOrSummary('nextKey')(props), 'summary');
    });
    it('returns "nextKey" when passed "nextKey" and user is not editing or adding a card', function() {
      assert.equal(nextOrSummary('nextKey')(props), 'nextKey');
    });
  });

  describe('#applyEditOrAddPath', function() {
    it('returns /apply/id-and-license + url if props.flow is not edit or add', function() {
      assert.equal(applyEditOrAddPath('/card-action')(props), '/apply/id-and-license/card-action');
    });
    it('returns /apply/id-and-license/add + url if props.flow is add', function() {
      props.flow = 'add';
      assert.equal(applyEditOrAddPath('/card-action')(props), '/apply/id-and-license/add/card-action');
    });
    it('returns /apply/id-and-license/edit + url if props.flow is edit', function() {
      props.flow = 'edit';
      assert.equal(applyEditOrAddPath('/card-action')(props), '/apply/id-and-license/edit/card-action');
    });
  });

  describe('#applyOrEditCDLPath', function() {
    it('returns /apply/cdl + url if props.flow is not edit', function() {
      assert.equal(applyOrEditCDLPath('/motorcycle')(props), '/apply/cdl/motorcycle');
    });
    it('returns /apply/cdl/edit + url if props.flow is edit', function() {
      props.flow = 'edit';
      assert.equal(applyOrEditCDLPath('/motorcycle')(props), '/apply/cdl/edit/motorcycle');
    });
  });


  describe('#getAppKey', function() {
    let cookieValue;
    beforeEach(function() {
      cookieValue = '';
    });
    it('returns IDme by defuault', function() {
      assert.equal(getAppKey(cookieValue), 'IDme');
    });
    it('returns cdlIDme when cookieValue is cdl', function() {
      cookieValue = 'cdl';
      assert.equal(getAppKey(cookieValue), 'cdlIDme');
    });
  });

  describe('#signInUrl', function() {
    it('returns /apply/cdl/sign-in when appName is cdl', function() {
      assert.equal(signInURL('cdl'), '/apply/cdl/sign-in');
    });
    it('returns /apply/id-and-license/sign-in when appName is id-and-license', function() {
      assert.equal(signInURL('id-and-license'), '/apply/id-and-license/sign-in');
    });
    it('returns /apply when appName is blank', function() {
      assert.equal(signInURL(''), '/apply');
    });
  });
});

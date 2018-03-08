'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import translations     from '../../../../../client/i18n';
import MyHistory        from '../../../../../client/presentations/cdl/summary/my-history.jsx';

describe('CDL Summary My Basics section', function() {
  const Wrapper = wrapperGenerator(store);
  let props, component;

  beforeEach(function() {
    props = {
      ui: {
        locale: 'en'
      },
      cdl: {
        history: {
          currentDLInfo: {
            number:   '',
            month:        '',
            day:          '',
            year:         '',
            isIssued:     '',
            issuedBy:     ''
          },
          medicalHistory: {
            hasMedicalCondition: '',
            medicalInfo: ''
          },
          namesHistory: {
            hasUsedPreviousNames: '',
            previousNames: ''
          },
          otherStateLicenses: {
            hasNonCALicense: '',
            tenYearHistory: ''
          }
        }
      }
    };

  });

  describe('#medical history', function() {
    it('does not render if no selection made', function() {
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Medical conditions:'))
    });

    it('shows the medical info text if user selected Yes to having a medical condition', function() {
      let testString = 'missing toenails';
      props.cdl.history.medicalHistory.hasMedicalCondition = 'Yes';
      props.cdl.history.medicalHistory.medicalInfo = testString;
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes(testString));
    });
  });

  describe('#Current DL Info', function() {
    it('does not render if no info provided', function() {
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Current DL number:'))
    });

    it('says "None" if user has indicated they do not have a current DL', function() {
      props.cdl.history.currentDLInfo.isIssued = 'No';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Current DL number:None'), 'None text missing');
    });

    it('shows current DL number if number provided', function() {
      props.cdl.history.currentDLInfo.isIssued = 'Yes';
      props.cdl.history.currentDLInfo.number = 'A10157';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Current DL number:A10157'), 'Number missing');
    });

    it('shows expiration date if provided', function() {
      props.cdl.history.currentDLInfo.isIssued = 'Yes';
      props.cdl.history.currentDLInfo.number = 'A10157';
      props.cdl.history.currentDLInfo.month = '4';
      props.cdl.history.currentDLInfo.day = '27';
      props.cdl.history.currentDLInfo.year = '4058';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Expiration date:4/27/4058'), 'expiration date missing');
    });
  });

  describe('#names history', function() {
    it('does not render if no selection made', function() {
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Previous NamesNone'))
    });

    it('shows the previous names text box if user selected Yes to having previous names', function() {
      let previousNames = 'doe doe doe';
      props.cdl.history.namesHistory.hasUsedPreviousNames = 'Yes';
      props.cdl.history.namesHistory.previousNames = previousNames;
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes(previousNames));
    });
  });

  describe('#other state licenses', function() {
    it('does not render if no selection made', function() {
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Previous NamesNone'))
    });

    it('shows the ten year history selections if user selected Yes to having out of state licenses', function() {
      props.cdl.history.otherStateLicenses.hasNonCALicense = 'Yes';
      props.cdl.history.otherStateLicenses.tenYearHistory = 'online';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Online'));
    });
  });
});

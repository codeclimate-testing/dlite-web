'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import data             from '../../../../../server/models/parsers/client-default-state.js';
import translations     from '../../../../../client/i18n';

import MyHistory        from '../../../../../client/presentations/conclusion/summary/my-history.jsx';
import {
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService
} from '../../../../../client/presentations/conclusion/summary/my-history/index';

const Wrapper = wrapperGenerator(store);
let locale = 'en';

describe('Summary My History section', function() {

  describe('#My history accordion', function() {
    it('shows a closed accordion with text "My history"', function() {
      let props = {
        application: Object.assign({}, data.IDDL.application),
        onSubmit: spy(),
        ui: { locale }
      };

      let component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('My history'));
    });
  });
});

describe('Summary My history section components', function() {
  let props;
  beforeEach(function() {
    props = Object.assign({}, data.IDDL.application);
    props.locale = locale;
  });

  describe('#LicenseAndIDHistory', function() {
    it('shows "None" when no license and id history', function() {
      let licenseAndIdHistory = {
        DLIDNumber: '',
        issuedBy: '',
        month: '',
        day: '',
        year: '',
        isIssued: 'No'
      };

      let component = render(
        <Wrapper>
          <LicenseAndIdHistory
            { ...props }
            title = 'Previous DL/ID card number'
            editKey = 'cardHistory'
            licenseAndIdHistory={licenseAndIdHistory}
            title = 'Previous DL/ID card number'
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Previous DL/ID card number'), true);
      assert.equal(component.text().includes('None'), true);
    });

    it('shows license and id history selections', function(){
      let licenseAndIdHistory = {
        DLIDNumber: '111',
        issuedBy: 'CA',
        month: '1',
        day: '1',
        year: '2018',
        isIssued: 'Yes'
      };

      let component = render(
        <Wrapper>
          <LicenseAndIdHistory
            { ...props }
            title = 'Previous DL/ID card number'
            editKey = 'cardHistory'
            licenseAndIdHistory={licenseAndIdHistory}
            title = 'Previous DL/ID card number'

          />
        </Wrapper>
      )

      assert.equal(component.text().includes('Previous DL/ID card number'), true);
      assert.equal(component.text().includes('111'), true);
      assert.equal(component.text().includes('Issued in'), true);
      assert.equal(component.text().includes('CA'), true);
      assert.equal(component.text().includes('Expiration date'), true);
      assert.equal(component.text().includes('1/1/2018'), true);
    });
  });

  describe('#NamesHistory', function() {
    it('shows "None" when no names history', function(){
      props.namesHistory = {
        hasUsedPreviousNames: 'No',
        previousNames: ''
      };
      let component = render(
        <Wrapper>
          <NamesHistory
            { ...props }
            editKey='nameHistory'
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Previous names'), true);
      assert.equal(component.text().includes('None'), true);
    });

    it('shows names history', function(){
      props.namesHistory = {
        hasUsedPreviousNames: 'Yes',
        previousNames: 'John Doe'
      };

      let component = render(
        <Wrapper>
          <NamesHistory
            { ...props }
            editKey='nameHistory'
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Previous names'), true);
      assert.equal(component.text().includes('John Doe'), true);
    });
  });

  describe('#MedicalHistory', function() {
    describe('when not getting a DL', function() {
      it('does not show medical history', function() {
        let medicalHistory = {
          hasMedicalCondition: 'Yes',
          medicalInfo: 'blind'
        };

        props.DLApp.isApplying = false;

        let component = render(
          <Wrapper>
            <MedicalHistory
              { ...props }
              medicalHistory={medicalHistory}
              editKey = 'medicalHistory'
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Medical conditions'), false);
        assert.equal(component.text().includes('None'), false);
      });
    });

    describe('when getting a DL', function() {
      it('shows "None" when no medical history', function() {
        let medicalHistory = {
          hasMedicalCondition: 'No',
          medicalInfo: ''
        };
        props.DLApp = {
          isApplying: true,
          action: 'new'
        };

        let component = render(
          <Wrapper>
            <MedicalHistory
              { ...props }
              editKey = 'medicalHistory'
              showIf = {true}
              medicalHistory={medicalHistory}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Medical conditions'), true);
        assert.equal(component.text().includes('None'), true);
      });

    it('shows medical history', function(){
      let medicalHistory = {
        hasMedicalCondition: 'Yes',
        medicalInfo: 'Blind'
      };
      props.DLApp = {
        isApplying: true,
        action: 'new'
      };

      let component = render(
          <Wrapper>
          <MedicalHistory
          { ...props }
          editKey = 'medicalHistory'
          showIf = {true}
          medicalHistory={medicalHistory}
          />
          </Wrapper>
        )
        assert.equal(component.text().includes('Medical conditions'), true);
        assert.equal(component.text().includes('Blind'), true);
      });
    })
  });
  describe('#LicenseIssues', function() {
    it('shows "None" when no license issues', function(){
      let licenseIssues = {
        isSuspended: 'No',
        month: '',
        day: '',
        year: '',
        reason: ''
      };

      let component = render(
        <Wrapper>
          <LicenseIssues
            { ...props }
            editKey = 'licenseIssues'
            licenseIssues={licenseIssues}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Driving record'), true);
      assert.equal(component.text().includes('None'), true);
    });

    it('shows license issues selections', function(){
      let licenseIssues = {
        isSuspended: 'Yes',
        month: '11',
        day: '11',
        year: '2015',
        reason: 'DUI'
      };

      let component = render(
        <Wrapper>
          <LicenseIssues
            { ...props }
            editKey = 'licenseIssues'
            licenseIssues={licenseIssues}
          />
        </Wrapper>
      )

      assert.equal(component.text().includes('Driving record'), true);
      assert.equal(component.text().includes('DUI'), true);
      assert.equal(component.text().includes('Record date'), true);
      assert.equal(component.text().includes('11/11/2015'), true);
    });
  });

  describe('#VeteransService', function() {
    it('shows veterans service selections', function(){
      let veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: 'No',
        previouslyDesignated: 'Yes',
        veteransIdentifier: 'Yes'
      };

      let component = render(
        <Wrapper>
          <VeteransService
            { ...props }
            editKey = 'veterans'
            veteransService={veteransService}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Veteran:'), true);
      assert.equal(component.text().includes('Yes'), true);
      assert.equal(component.text().includes('Get benefit information:'), true);
      assert.equal(component.text().includes('No'), true);
      assert.equal(component.text().includes('"Veteran" printed on card(s):'), true);
    });

    it('shows only isVeteran answer if answer is No', function() {
      let veteransService = {
        isVeteran: 'No',
        receiveBenefits: '',
        previouslyDesignated: '',
        veteransIdentifier: ''
      };
      let component = render(
        <Wrapper>
          <VeteransService
            { ...props }
            editKey = 'veterans'
            veteransService={veteransService}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Veteran:No'), true);
      assert.equal(component.text().includes('Get benefit information:'), false);
      assert.equal(component.text().includes('"Veteran" printed on card(s):'), false);
    });
  });
});
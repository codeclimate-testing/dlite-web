'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import MyApp            from '../../../../../client/presentations/cdl/summary/cdl-app.jsx';

describe('CDL Summary My CDL Application section', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = {
      ui: { },
      cdl: {
        cardAction: '',
        currentCardInfo: {
          month: '',
          day: '',
          year: '',
          number: ''
        },
        cardChanges: {
          correctOrUpdate: ''
        },
        realID: '',
        licenseClass: '',
        cdlEndorsements: {
          type: [],
          needEndorsement: ''
       },
        cdlCertificates: {
          type: [],
          needCertificates: ''
        }
      }
    };
  });

  describe('#CdlAction', function() {
    it('does not render if cardAction is blank', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('I am'));
    });

    it('shows user getting a new CDL if cardAction equals new', function() {
      props.cdl.cardAction = 'new';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amApplying for the first time'));
      assert.ok(!component.text().includes('Correcting'));
      assert.ok(!component.text().includes('Replacing'));
      assert.ok(!component.text().includes('Renewing'));
    });

    it('shows user renewing a CDL if cardAction equals renew', function() {
      props.cdl.cardAction = 'renew';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amRenewing'));
      assert.ok(!component.text().includes('Correcting'));
      assert.ok(!component.text().includes('Applying for the first time'));
      assert.ok(!component.text().includes('Replacing'));
    });

    it('shows user replacing a CDL if cardAction equals replace', function() {
      props.cdl.cardAction = 'replace';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amReplacing'));
      assert.ok(!component.text().includes('Correcting'));
      assert.ok(!component.text().includes('Applying for the first time'));
      assert.ok(!component.text().includes('Renewing'));
    });

    it('shows user updating a CDL if cardAction equals change', function() {
      props.cdl.cardAction = 'change';
      props.cdl.cardChanges.correctOrUpdate = 'update'
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amUpdating'));
      assert.ok(!component.text().includes('Correcting'));
      assert.ok(!component.text().includes('Replacing'));
      assert.ok(!component.text().includes('Renewing'));
      assert.ok(!component.text().includes('Applying for the first time'));
    });

    it('shows user correcting a CDL if cardAction equals change', function() {
      props.cdl.cardAction = 'change';
      props.cdl.cardChanges.correctOrUpdate = 'correct'
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amCorrecting'));
      assert.ok(!component.text().includes('Replacing'));
      assert.ok(!component.text().includes('Renewing'));
      assert.ok(!component.text().includes('Applying for the first time'));
    });
  });

  describe('#Real ID', function() {
    it('does not render if user has not selected Real ID Yes or No', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Real ID:'));
    });
    it('shows Yes if user has selected Yes to Real ID', function() {
      props.cdl.realID = 'Yes';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real IDYes'));
    });
    it('shows No if user has selected No to Real ID', function() {
      props.cdl.realID = 'No';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real IDNo'));
    });
  })

  describe('#CurrentCardInfo', function() {
    it('does not render if props.currentCardInfo is blank', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('CDL number:'));
    });

    it('shows "CDL number: None" if user has given a date but not CDL card number', function() {
      props.cdl.currentCardInfo.month = '10';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('CDL numberNone'));
    });

    it('shows the CDL number', function() {
      props.cdl.currentCardInfo.number = '99999';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('CDL number99999'));
    });

    it('does not show the date if only a partial date given', function() {
      props.cdl.currentCardInfo.year = '1999';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Expiration date'));
    });

    it('shows the full date', function() {
      props.cdl.currentCardInfo.year = '2000';
      props.cdl.currentCardInfo.month = '09';
      props.cdl.currentCardInfo.day = '03';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Expiration date09/03/2000'));
    });
  });

  describe('#LicenseClass', function() {
    it('does not render if licenseClass is not selected', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('License class'));
    });

    it('shows "Class A" if user has selected classA', function() {
      props.cdl.licenseClass = 'classA';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('License class:Class A'));
    });
  });

  describe('#Endorsements', function() {
    it('does not render if endorsement is not selected', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Endorsement(s)'));
    });

    it('shows selected endorsement', function() {
      props.cdl.cdlEndorsements.needEndorsement = 'Yes';
      props.cdl.cdlEndorsements.type = ['tank']
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Endorsement(s)Tank'));
    });
  });

  describe('#Certificates', function() {
    it('does not render if certificates is not selected', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Certificates(s)'));
    });

    it('shows selected certificates', function() {
      props.cdl.cdlCertificates.needCertificates = 'Yes';
      props.cdl.cdlCertificates.type = ['ambulance']
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Ambulance'));
    });
  });
});

'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import GuardianSignaturePage    from '../../../../client/presentations/conclusion/guardian-signature-page.jsx';
import store                    from '../../support/page-store';

describe('GuardianSignaturePage', function() {

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let guardianSignature = {
        isSigned:  '',
        guardianInfo: [{
          id: '',
          acceptLiabilities: null,
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          guardianStreet_1: '',
          guardianStreet_2: '',
          guardianCity: '',
          guardianState: '',
          guardianZip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        },
        {
          id: '',
          acceptLiabilities: null,
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          guardianStreet_1: '',
          guardianStreet_2: '',
          guardianCity: '',
          guardianState: '',
          guardianZip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        }]
      };

      let continueDisabled = !(dataPresent.guardianSignature(guardianSignature));
      let onChange = spy();

      props = {
        guardianSignature,
        continueDisabled,
        onChange
      }
    });

    it('shows the form asking for parent/guardian signature', function() {
      let component = render(
        <Wrapper>
          <GuardianSignaturePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isSigned-Yes"]').length, 'Guardian signature - Yes button missing');
      assert.ok(component.find('label[for="isSigned-No"]').length, 'Guardian signature - No button missing');
      assert.ok(component.find('.guardian-signature-form').length, 'Guardian signature - form missing');
    });

    it('shows the form asking guardian details after guardian selected Yes to sign', function() {
      props.guardianSignature.isSigned = 'Yes';
      let component = render(
        <Wrapper>
          <GuardianSignaturePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="signature"]').length, 'Guardian signature - name input missing');
      assert.ok(component.find('label[for="signatureDateMonth"]').length, 'Guardian signature - today month missing');
      assert.ok(component.find('label[for="signatureDateDay"]').length, 'Guardian signature - today day missing');
      assert.ok(component.find('label[for="signatureDateYear"]').length, 'Guardian signature - today year missing');
      assert.ok(component.find('label[for="phoneNumber"]').length, 'Guardian signature - phone number missing');
      assert.ok(component.find('label[for="guardianStreet_1"]').length, 'Guardian signature - street address missing');
      assert.ok(component.find('label[for="guardianStreet_2"]').length, 'Guardian signature - apt number missing');
      assert.ok(component.find('label[for="guardianCity"]').length, 'Guardian signature - address city missing');
      assert.ok(component.find('label[for="guardianState"]').length, 'Guardian signature - address state missing');
      assert.ok(component.find('label[for="guardianZip"]').length, 'Guardian signature - address zip missing');
      assert.ok(component.find('label[for="IDNumber"]').length, 'Guardian signature - ID number missing');
      assert.ok(component.find('label[for="IDIssuedBy"]').length, 'Guardian signature - Id issued by missing');
      assert.ok(component.find('label[for="IDExpirationDateMonth"]').length, 'Guardian signature - ID expiration month missing');
      assert.ok(component.find('label[for="IDExpirationDateDay"]').length, 'Guardian signature - ID expiration day missing');
      assert.ok(component.find('label[for="IDExpirationDateYear"]').length, 'Guardian signature - ID expiration year missing');

    });

    it('next button is disabled', function() {
      props.guardianSignature.isSigned = '';
      props.continueDisabled = !(dataPresent.guardianSignature(props.guardianSignature));

      let component = render(
        <Wrapper>
          <GuardianSignaturePage  {...props} />
        </Wrapper>
      );

      assert(component.find('.arrow-button').prop('disabled'));
    });

    it('entering Yes to sign and filling in details makes next button no longer disabled', function() {
      props.guardianSignature.isSigned =   'Yes';
      props.guardianSignature.guardianInfo[0].acceptLiabilities = true,
      props.guardianSignature.guardianInfo[0].signature = 'GuardianSignature',
      props.guardianSignature.guardianInfo[0].signatureDateMonth = '10',
      props.guardianSignature.guardianInfo[0].signatureDateDay = '4',
      props.guardianSignature.guardianInfo[0].signatureDateYear = '2018',
      props.guardianSignature.guardianInfo[0].phoneNumber = '(616)-923-1221',
      props.guardianSignature.guardianInfo[0].guardianStreet_1 = '865 Main Street',
      props.guardianSignature.guardianInfo[0].guardianStreet_2 = 'Unit no. 05',
      props.guardianSignature.guardianInfo[0].guardianCity = 'Crazidino Here',
      props.guardianSignature.guardianInfo[0].guardianState = 'CA',
      props.guardianSignature.guardianInfo[0].guardianZip = '94000',
      props.guardianSignature.guardianInfo[0].IDNumber = 'XYZ12344321',
      props.guardianSignature.guardianInfo[0].IDIssuedBy = 'U.S.A.',
      props.guardianSignature.guardianInfo[0].IDExpirationDateMonth = '10',
      props.guardianSignature.guardianInfo[0].IDExpirationDateDay = '14',
      props.guardianSignature.guardianInfo[0].IDExpirationDateYear = '2020'

      props.continueDisabled = !(dataPresent.guardianSignature(props.guardianSignature));

      let component = render(
        <Wrapper>
          <GuardianSignaturePage {...props} />
        </Wrapper>
      );

      assert(!(component.find('.arrow-button').prop('disabled')));
    });

    it('entering No makes the info message appear', function() {
      props.guardianSignature.isSigned = 'No';
      let component = render(
        <Wrapper>
          <GuardianSignaturePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.message-box .info').length, 'info message box not found');
    });

  });

});

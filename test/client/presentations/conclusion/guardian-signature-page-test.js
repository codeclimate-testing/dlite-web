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
          id: '0',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        },
        {
          id: '1',
          acceptLiabilities: '',
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      };

      let continueDisabled = !(dataPresent.guardianSignature(guardianSignature));
      let onChange = spy();
      let validations = {
            isSigned:                   spy(),
            acceptLiabilities_0:        spy(),
            name_0:                     spy(),
            month_0:                    spy(),
            day_0:                      spy(),
            year_0:                     spy(),
            phoneNumber_0:              spy(),
            guardian_0Street_1:         spy(),
            guardian_0Street_2:         spy(),
            guardian_0City:             spy(),
            guardian_0Zip:              spy(),
            number_0:                   spy(),
            issuedBy_0:                 spy(),
            expirationMonth_0:          spy(),
            expirationDay_0:            spy(),
            expirationYear_0:           spy(),
            acceptLiabilities_1:        spy(),
            name_1:                     spy(),
            month_1:                    spy(),
            day_1:                      spy(),
            year_1:                     spy(),
            phoneNumber_1:              spy(),
            guardian_1Street_1:         spy(),
            guardian_1Street_2:         spy(),
            guardian_1City:             spy(),
            guardian_1Zip:              spy(),
            number_1:                   spy(),
            issuedBy_1:                 spy(),
            expirationMonth_1:          spy(),
            expirationDay_1:            spy(),
            expirationYear_1:           spy(),
            all:                        spy(),
            isValid:                    () => { return true; }
      };

      props = {
        guardianSignature,
        continueDisabled,
        onChange,
        validations
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
      assert.ok(component.find('label[for="name_0"]').length, 'Guardian signature - name input missing');
      assert.ok(component.find('label[for="month_0"]').length, 'Guardian signature - today month missing');
      assert.ok(component.find('label[for="day_0"]').length, 'Guardian signature - today day missing');
      assert.ok(component.find('label[for="year_0"]').length, 'Guardian signature - today year missing');
      assert.ok(component.find('label[for="phoneNumber_0"]').length, 'Guardian signature - phone number missing');
      assert.ok(component.find('label[for="guardian_0Street_1"]').length, 'Guardian signature - street address missing');
      assert.ok(component.find('label[for="guardian_0Street_2"]').length, 'Guardian signature - apt number missing');
      assert.ok(component.find('label[for="guardian_0City"]').length, 'Guardian signature - address city missing');
      assert.ok(component.find('#guardian_0State').length, 'Guardian signature - address state missing');
      assert.ok(component.find('label[for="guardian_0Zip"]').length, 'Guardian signature - address zip missing');
      assert.ok(component.find('label[for="number_0"]').length, 'Guardian signature - ID number missing');
      assert.ok(component.find('label[for="issuedBy_0"]').length, 'Guardian signature - Id issued by missing');
      assert.ok(component.find('label[for="expirationMonth_0"]').length, 'Guardian signature - ID expiration month missing');
      assert.ok(component.find('label[for="expirationDay_0"]').length, 'Guardian signature - ID expiration day missing');
      assert.ok(component.find('label[for="expirationYear_0"]').length, 'Guardian signature - ID expiration year missing');

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
      props.guardianSignature.guardianInfo[0].signature.name = 'GuardianSignature',
      props.guardianSignature.guardianInfo[0].signature.month = '10',
      props.guardianSignature.guardianInfo[0].signature.day = '4',
      props.guardianSignature.guardianInfo[0].signature.year = '2018',
      props.guardianSignature.guardianInfo[0].phoneNumber = '(616)-923-1221',
      props.guardianSignature.guardianInfo[0].address.street_1 = '865 Main Street',
      props.guardianSignature.guardianInfo[0].address.street_2 = 'Unit no. 05',
      props.guardianSignature.guardianInfo[0].address.city = 'Crazidino Here',
      props.guardianSignature.guardianInfo[0].address.state = 'CA',
      props.guardianSignature.guardianInfo[0].address.zip = '94000',
      props.guardianSignature.guardianInfo[0].ID.number = 'XYZ12344321',
      props.guardianSignature.guardianInfo[0].ID.issuedBy = 'U.S.A.',
      props.guardianSignature.guardianInfo[0].ID.expirationMonth = '10',
      props.guardianSignature.guardianInfo[0].ID.expirationDay = '14',
      props.guardianSignature.guardianInfo[0].ID.expirationYear = '2020'

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

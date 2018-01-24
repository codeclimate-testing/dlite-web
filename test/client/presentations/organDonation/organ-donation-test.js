'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import OrganDonationPage        from '../../../../client/presentations/organ-donation/organ-donation-page.jsx';
import store                    from '../../support/page-store';

describe('OrganDonationPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let organDonation = {
        donateOrgan: '',
        donateMoney: ''
      };

      let onChange = spy();

      let validations = {
        donateOrgan: spy(),
        donateMoney: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        organDonation,
        onChange,
        validations
      }
    });

    it('shows the form asking if user would like to be a organ donor', function() {
      let component = render(
        <Wrapper>
          <OrganDonationPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="donateOrgan-Yes"]').length, 'Donate Organ - Yes button missing');
      assert.ok(component.find('label[for="donateOrgan-No"]').length, 'Donate Organ - No button missing');
      assert.ok(component.find('.donate-organ-form').length, 'Donate Organ - form missing');
    });

    it('shows the form asking if user would like to contribute 2 dollars', function() {
      let component = render(
        <Wrapper>
          <OrganDonationPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="donateMoney-Yes"]').length, 'Donate Money - Yes button missing');
      assert.ok(component.find('label[for="donateMoney-No"]').length, 'Donate Money - No button missing');
      assert.ok(component.find('.donate-money-form').length, 'Donate Money - form missing');
    });
  });
});


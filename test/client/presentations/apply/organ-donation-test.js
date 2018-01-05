'use strict';

import assert                   from 'assert';

import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import OrganDonationPage        from '../../../../client/presentations/apply/organ-donation-page.jsx';
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

      let continueDisabled = !(dataPresent.organDonation(organDonation))
      let onChange = spy();

      props = {
        organDonation,
        continueDisabled,
        onChange
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

    it('next button is disabled', function() {
      props.organDonation.donateOrgan = '';
      props.organDonation.donateMoney = '';
      props.continueDisabled = !(dataPresent.organDonation(props.organDonation));

      let component = render(
        <Wrapper>
          <OrganDonationPage  {...props} />
        </Wrapper>
      );

      assert(component.find('.arrow-button').prop('disabled'));
    });

    it('entering Yes to both forms makes next button no longer disabled', function() {
      props.organDonation.donateOrgan = 'Yes';
      props.organDonation.donateMoney = 'Yes';
      props.continueDisabled = !(dataPresent.organDonation(props.organDonation));

      let component = render(
        <Wrapper>
          <OrganDonationPage {...props} />
        </Wrapper>
      );

      assert(!(component.find('.arrow-button').prop('disabled')));
    });

  });

});


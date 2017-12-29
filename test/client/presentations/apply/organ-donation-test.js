'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import OrganPage                from '../../../../client/presentations/apply/donate-organ-form.jsx';

describe('OrganPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let organDonation = {
        donate: '',
        contribute: ''
      };

      let continueDisabled = !(dataPresent.organDonation(organDonation))
      let onChange = spy();

      props = {
        organDonation,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if user would like to donate', function() {
      let component = render(
        <Wrapper>
          <OrganPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="donate-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="donate-No"]').length, 'No button missing');
      assert.ok(component.find('.organ-form').length, 'form missing');
    });

    // it('next button is disabled', function() {
    //   let component = render(
    //     <Wrapper>
    //       <OrganPage  {...props} />
    //     </Wrapper>
    //   );
    //   assert.ok(component.find('.arrow-button .forward disabled'));
    // });

    // it('entering Yes to both forms makes next button no longer disabled', function() {
    //   props.organDonation.donate = 'Yes';
    //   props.organDonation.contribute = 'Yes';
    //   props.continueDisabled  =   !(dataPresent.organDonation(props.organDonation));

    //   let component = render(
    //     <Wrapper>
    //       <OrganPage {...props} />
    //     </Wrapper>
    //   );

    //   assert.equal(component.find('.arrow-button .forward disabled'), false);
    //   assert.ok(component.find('.arrow-button forward'));
    // });

  });

});


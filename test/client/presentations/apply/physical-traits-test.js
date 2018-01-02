'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import PhysicalTraitsPage       from '../../../../client/presentations/apply/physical-traits-page.jsx';
import store                    from '../../support/page-store';

describe('PhysicalTraitsPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let physicalTraits = {
        sex: '',
        eyeColor: '',
        hairColor: ''
      };
      let continueDisabled = !(dataPresent.physicalTraits(physicalTraits));
      let onChange = spy();

      props = {
        physicalTraits,
        continueDisabled,
        onChange
      }
    });
    
    it('shows forms asking for sex, eye color, and hair color ', function() {
      let component = render(
        <Wrapper>
          <PhysicalTraitsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.sex').length, 'form asking for sex missing');
      assert.ok(component.find('.eye-color').length, 'form asking for eye color missing');
      assert.ok(component.find('.hair-color').length, 'form asking for hair color missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <PhysicalTraitsPage  {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, true);
    });

    it('entering physical traits makes next button no longer disabled', function() {
      props.physicalTraits = {
        sex: 'Female',
        eyeColor: 'Gray',
        hairColor: 'Bald'
      };
      props.continueDisabled = !(dataPresent.physicalTraits(props.physicalTraits));

      let component = render(
        <Wrapper>
          <PhysicalTraitsPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, false);
    });
  });
});


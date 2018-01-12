'use strict';

import assert                   from 'assert';
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

      let validations = {
        sex: spy(),
        eyeColor: spy(),
        hairColor: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        physicalTraits,
        continueDisabled,
        onChange,
        validations
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

    it('shows six eye color options', function() {
      let component = render(
        <Wrapper>
          <PhysicalTraitsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="eyeColor-Black"]').length, 'black eye color selection missing');
      assert.ok(component.find('label[for="eyeColor-Blue"]').length, 'blue eye color selection missing');
      assert.ok(component.find('label[for="eyeColor-Brown"]').length, 'brown eye color selection missing');
      assert.ok(component.find('label[for="eyeColor-Gray"]').length, 'gray eye color selection missing');
      assert.ok(component.find('label[for="eyeColor-Green"]').length, 'green eye color selection missing');
      assert.ok(component.find('label[for="eyeColor-Hazel"]').length, 'hazel eye color selection missing');
    });

    it('shows nine hair color options', function() {
      let component = render(
        <Wrapper>
          <PhysicalTraitsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hairColor-Auburn"]').length, 'auburn hair color selection missing');
      assert.ok(component.find('label[for="hairColor-Bald"]').length, 'bald hair oolor selection missing');
      assert.ok(component.find('label[for="hairColor-Black"]').length, 'black hair color selection missing');
      assert.ok(component.find('label[for="hairColor-Blonde"]').length, 'blonde hair color selection missing');
      assert.ok(component.find('label[for="hairColor-Brown"]').length, 'brown hair color selection missing');
      assert.ok(component.find('label[for="hairColor-Gray"]').length, 'gray hair color selection missing');
      assert.ok(component.find('label[for="hairColor-Red"]').length, 'red hair color selection missing');
      assert.ok(component.find('label[for="hairColor-White"]').length, 'white hair color selection missing');
      assert.ok(component.find('label[for="hairColor-Other"]').length, 'other hair color selection missing');
    });
  });
});


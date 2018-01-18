'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import ChoosePartyPage          from '../../../../client/presentations/voter-registration/choose-party-page.jsx';
import store                    from '../../support/page-store';

describe('ChoosePartyPage ', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let politicalPartyChoose = {
        isSelected: ''
      };

      let onChange = spy();
      let validations = {
        isSelected: spy(),
        politicalPartyChoose: spy(),
        all: spy()
      };

      props = {
        politicalPartyChoose,
        onChange,
        validations
      }
    });
    
    it('shows the form asking if user would like to choose political party', function() {
      let component = render(
        <Wrapper>
          <ChoosePartyPage   {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.choose-political-party').length, 'form missing');
    });

    it('form has option to select yes or skip', function() {
      let component = render(
        <Wrapper>
          <ChoosePartyPage   {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isSelected-Yes"]').length, 'Yes checkbox missing');
      assert.ok(component.find('label[for="isSelected-Skip"]').length, 'Skip checkbox missing');
    });

    // TODO add test for selecting Yes adds form letting user choose the party

  });

});


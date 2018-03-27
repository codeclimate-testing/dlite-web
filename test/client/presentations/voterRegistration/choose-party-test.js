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
        isSelected: '',
        politicalPartyChoose: '',
        otherParty: ''
      };

      let dateOfBirth = {
        year: '',
        day: '',
        month: ''
      };

      let onChange = spy();
      let validations = {
        isSelected: spy(),
        politicalPartyChoose: spy(),
        otherParty: spy(),
        all: spy()
      };

      props = {
        politicalPartyChoose,
        dateOfBirth,
        onChange,
        validations
      };

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

    it('selecting yes shows list of parties', function() {
      props.politicalPartyChoose.isSelected = 'Yes';
      let component = render(
        <Wrapper>
          <ChoosePartyPage   {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.political-party-preference').length, 'political party form missing');
      assert.ok(component.find('label.radio-selector[for="American Independent Party"]', 'AIP radio not found'));
      assert.ok(component.find('label.radio-selector[for="Libertarian Party"]', 'libertarian radio not found'))
      assert.ok(component.find('label.radio-selector[for="Democratic Party"]', 'democratic radio not found'))
      assert.ok(component.find('label.radio-selector[for="Green Party"]', 'green radio not found'))
      assert.ok(component.find('label.radio-selector[for="Peace and Freedom Party"]', 'peace and freedom radio not found'))
      assert.ok(component.find('label.radio-selector[for="Republican Party"]', 'repub radio not found'))
      assert.ok(component.find('label.radio-selector[for="Other"]', 'other radio not found'))
    });

    describe('choosing other party', function() {
      it('selecting other party causes text input to appear', function() {
        props.politicalPartyChoose.isSelected = 'Yes';
        props.politicalPartyChoose.politicalPartyChoose = 'other';
        let component = render(
          <Wrapper>
            <ChoosePartyPage   {...props} />
          </Wrapper>
        );
        assert.ok(component.find('input#otherParty').length, 'input within radio selector not found');
      });

      it('placeholder text reads "Please enter your selection"', function() {
        props.politicalPartyChoose.isSelected = 'Yes';
        props.politicalPartyChoose.politicalPartyChoose = 'other';
        let component = render(
          <Wrapper>
            <ChoosePartyPage   {...props} />
          </Wrapper>
        );
        assert.ok(component.find('input#otherParty[placeholder="Please enter your selection"]').length, 'placeholder text not found');
      });
    });
  });
});


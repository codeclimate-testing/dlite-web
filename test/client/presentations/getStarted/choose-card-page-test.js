'use strict';

import assert                   from 'assert';

import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import ChooseCardPage           from '../../../../client/presentations/get-started/choose-card-page.jsx';
import store                    from '../../support/page-store';

describe('ChooseCardPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        IDDL: [],
        cardAction: '',
        youthIDInstead: ''
      };
      let cardChanges = {
        correctOrUpdate: ''
      };
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };

      let accordions = {};

      let onChange = spy();

      let validations = {
        cardType: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        cardType,
        cardChanges,
        dateOfBirth,
        accordions,
        onChange,
        validations
      }
    });

    it('if the user is getting a new card the form shows a button for ID and a button for DL', function() {
      props.cardType.cardAction = 'new';

      let component = render(
        <Wrapper>
          <ChooseCardPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ID"]').length, 'ID checkbox missing');
      assert.ok(component.find('label[for="DL"]').length, 'DL checkbox missing');
      assert.ok(component.find('input[type="checkbox"]').length, 'checkbox inputs not found');
      assert.ok(component.find('.choose-card-form').length, 'form missing');
      assert.equal(component.text().includes('What type of card would you like?'), true);
    });

    it('it shows a form with radio buttons asking renewing users which card type to renew', function() {
      props.cardType.cardAction = 'renew';
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('input[type="radio"]').length, 'radio inputs not found');
      assert.ok(component.find('.choose-card-form').length, 'form missing');
      assert.equal(component.text().includes('What type of card are you renewing'), true);
    });

    it('if the user is changing a card it shows radio buttons and asks about correcting or updating', function() {
      props.cardType.cardAction = 'change';
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('input[type="radio"]').length, 'radio input not found');
      assert.equal(component.text().includes('What type of card are you correcting or updating?'), true);
    });

    it('if the user is replacing a card it shows radio buttons and asks for the reason', function() {
      props.cardType.cardAction = 'replace';
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('input[type="radio"]').length, 'radio input not found');
      assert.equal(component.text().includes('What type of card are you replacing?'), true);
    });
  });
});


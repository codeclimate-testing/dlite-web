'use strict';

import assert           from 'assert';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import React            from 'react';
import {spy}            from 'sinon';
import CurrentCardPage  from '../../../../client/presentations/get-started/current-card-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import store            from '../../support/page-store';

describe('CurrentCardPage', function() {

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        IDDL : ['DL'],
        cardAction: 'renew',
        youthIDInstead: ''
      };

      let currentCardInfo = {
        number: '',
        day: '',
        month: '',
        year: ''
      };

      let accordions = {};

      let onChange = spy();

      let currentCardValidation = {
        number: spy(),
        month: spy(),
        day: spy(),
        year: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        cardType,
        currentCardInfo,
        accordions,
        onChange,
        currentCardValidation
      }
    });

    it('it shows a form with text input for card number and expiration date', function() {
      let component = render(
        <Wrapper>
          <CurrentCardPage {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('input[type="text"]#number').length, 'number input not found');
      assert.ok(component.find('input[type="number"]#month').length, 'month input not found');
      assert.ok(component.find('input[type="number"]#day').length, 'day inputs not found');
      assert.ok(component.find('input[type="number"]#year').length, 'year inputs not found');
      assert.ok(component.find('.current-card-form').length, 'form missing');
    });

    it('it asks for the ID number when the user has chosen to renew an ID', function() {
      props.cardType.IDDL = ['ID'];

      let component = render(
        <Wrapper>
          <CurrentCardPage {...props}/>
        </Wrapper>
      );

      assert.equal(component.text().includes('please enter your California ID number.'), true);
      assert.equal(component.text().includes('please enter your California Driver License number.'), false)
    });

    it('it asks for the DL number when the user has chosen to renew a DL', function() {
      props.cardType.IDDL = ['DL'];

      let component = render(
        <Wrapper>
          <CurrentCardPage {...props}/>
        </Wrapper>
      );

      assert.equal(component.text().includes('please enter your California ID number.'), false);
      assert.equal(component.text().includes('please enter your California Driver License number.'), true);
    });

    it('asks for the ID number when the user has chosen to renew or change an ID', function() {
      props.cardType.IDDL = ['ID'];
      
      let component = render(
        <Wrapper>
          <CurrentCardPage {...props} />
        </Wrapper>
      );

      assert.equal(component.text().includes('please enter your California ID number.'), true);
      assert.equal(component.text().includes('please enter your California Driver License number.'), false);
    });
  });
});


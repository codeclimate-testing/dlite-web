'use strict';

import assert           from 'assert';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import React            from 'react';
import {spy}            from 'sinon';
import CurrentCardPage  from '../../../../client/presentations/cdl/current-card-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import store            from '../../support/page-store';

describe('CurrentCardPage', function() {

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let currentCardInfo = {
        number: '',
        day: '',
        month: '',
        year: '',
        isIssued: ''
      };

      let onChange = spy();

      let validations = {
        number: spy(),
        month: spy(),
        day: spy(),
        year: spy(),
        all: spy(),
        isIssued: spy(),
        isValid: () => { return true; }
      };

      props = {
        currentCardInfo,
        onChange,
        validations
      };
    });

    describe('#initial render', function() {
      it('shows a form asking if user has a current DL', function() {
        let component = render(
          <Wrapper>
            <CurrentCardPage {...props}/>
          </Wrapper>
        );
        assert.ok(component.find('.current-card-form').length, 'form missing');
        assert.ok(component.find('label[for="isIssued-Yes"]').length, 'yes button missing');
      });

    });

    describe('#user selects No to not having a current DL', function() {
      it('shows info message saying user must pass tests', function() {
        props.currentCardInfo.isIssued = 'No';
        let component = render(
          <Wrapper>
            <CurrentCardPage {...props}/>
          </Wrapper>
        );
        assert.ok(component.find('.info').length, 'message box missing');
        assert.ok(component.text().includes('In order to get your Commercial Learner’s Permit, you’ll need to first pass the knowledge and driving skills tests for a basic (Non-Commercial Class C) driver license.'), 'text missing');
      });
    });

    describe('#user selects Yes to having a current DL', function() {
      it('it shows a form with text input for card number and expiration date', function() {
        props.currentCardInfo.isIssued = 'Yes';
        let component = render(
          <Wrapper>
            <CurrentCardPage {...props}/>
          </Wrapper>
        );
        assert.ok(component.find('input[type="text"]#number').length, 'number input not found');
        assert.ok(component.find('input[type="number"]#month').length, 'month input not found');
        assert.ok(component.find('input[type="number"]#day').length, 'day inputs not found');
        assert.ok(component.find('input[type="number"]#year').length, 'year inputs not found');
        assert.ok(component.find('.enter-current-card-info').length, 'form missing');
      });
    });
  });
});


'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import BallotByMailPage         from '../../../../client/presentations/voter-registration/ballot-by-mail-form.jsx';

describe('BallotByMailPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let ballotByMail = '';
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };

      let continueDisabled = !(dataPresent.value(ballotByMail))
      let onChange = spy();

      props = {
        ballotByMail,
        dateOfBirth,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if user would like to get ballot in mail', function() {
      let component = render(
        <Wrapper>
          <BallotByMailPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ballotByMailYes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="ballotByMailNo"]').length, 'No button missing');
      assert.ok(component.find('.ballot-by-mail-form').length, 'form missing');
    });

    // TODO add FAQ drawer tests

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <BallotByMailPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('entering Yes next button no longer disabled', function() {
      props.ballotByMail= 'Yes';
      props.continueDisabled  =   !(dataPresent.value(props.ballotByMail));

      let component = render(
        <Wrapper>
          <BallotByMailPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

  });

});


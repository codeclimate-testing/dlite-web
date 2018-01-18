'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';

import * as dataPresent         from '../../../../client/helpers/data-present';
import BallotByMailPage         from '../../../../client/presentations/voter-registration/ballot-by-mail-page.jsx';
import store                    from '../../support/page-store';

describe('BallotByMailPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
  let props;

    beforeEach(function() {
      let ballotByMail = '';
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: '',
      };
      let validations = {
        ballotByMail: spy(),
        all: spy()
      };

      props = {
        ballotByMail,
        dateOfBirth,
        onChange,
        validations
      };
    });

    it('shows the form asking if user would like to get ballot in mail', function() {
      let component = render(
        <Wrapper>
          <BallotByMailPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ballotByMail-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="ballotByMail-No"]').length, 'No button missing');
      assert.ok(component.find('.ballot-by-mail-form').length, 'form missing');
    });

    it('answering No shows info message', function() {
      props.ballotByMail = 'No';
      props.selectedValue = props.ballotByMail;

      let component = render(
        <Wrapper>
          <BallotByMailPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('you vote in-person at your polling place.'), 'text not found');
      assert.ok(component.find('.message-box .info'), 'message box not found');
    });

    it('answering Yes shows info message', function() {
      props.ballotByMail = 'Yes';
      props.selectedValue = props.ballotByMail;

      let component = render(
        <Wrapper>
          <BallotByMailPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('your ballot will now come by mail.'), 'text not found');
      assert.ok(component.find('.message-box .info'), 'message box not found');
    });
  });
});

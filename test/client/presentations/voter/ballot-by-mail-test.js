'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';

import * as dataPresent         from '../../../../client/helpers/data-present';
import BallotByMailPage         from '../../../../client/presentations/voter-registration/ballot-by-mail/ballot-by-mail-form.jsx';

describe('BallotByMailPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  let props;

  beforeEach(function() {
    let ballotByMail = '';
    let dateOfBirth = {
      month: '',
      day: '',
      year: ''
    };

    let continueDisabled = true;
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
});

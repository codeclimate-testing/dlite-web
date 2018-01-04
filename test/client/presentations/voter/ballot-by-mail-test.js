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
import store                    from '../../support/page-store';

describe('BallotByMailPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
  let props;

  beforeEach(function() {
    let ballotByMail = '';
    let continueDisabled = true;
    let onChange = spy();
    let dateOfBirth = {
      month: '',
      day: '',
      year: '',
    };

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
    assert.equal(props.continueDisabled, true);
    assert.ok(component.find('label[for="ballotByMailYes"]').length, 'Yes button missing');
    assert.ok(component.find('label[for="ballotByMailNo"]').length, 'No button missing');
    assert.ok(component.find('.ballot-by-mail-form').length, 'form missing');
  });

  // TODO add FAQ drawer tests
});
});
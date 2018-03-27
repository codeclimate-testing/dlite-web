'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import BallotLanguagePage       from '../../../../client/presentations/voter-registration/ballot-language-page.jsx';
import store                    from '../../support/page-store';

describe('BallotLanguagePage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let ballotLanguage = 'en';
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let validations = {
        ballotLanguage: spy(),
        all: spy(),
        isValid: spy()
      };

      props = {
        ballotLanguage,
        dateOfBirth,
        onChange,
        validations
      };
    });

    it('shows the form asking user to choose language', function() {
      let component = render(
        <Wrapper>
          <BallotLanguagePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ballotLanguage-ja"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="ballotLanguage-en"]').length, 'English option missing');
      assert.ok(component.find('label[for="ballotLanguage-zh"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="ballotLanguage-es"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="ballotLanguage-th"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="ballotLanguage-ko"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="ballotLanguage-tl"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="ballotLanguage-hi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="ballotLanguage-km"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="ballotLanguage-vi"]').length, 'Vietnamese option missing');
      assert.ok(component.find('.ballot-language-form').length, 'form missing');
    });

    it('english is the default selection if the user has not chosen a different app language', function() {
      let component = render(
        <Wrapper>
          <BallotLanguagePage  {...props} />
        </Wrapper>
      );

      assert.ok(component.find('#ballotLanguage-en[tabindex="0"]').length, 'english radio not selected by default if no app language chosen');
    });
  });

});


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
      let ballotLanguage = '';
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
      assert.ok(component.find('label[for="ballotLanguage-Japanese"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="ballotLanguage-English"]').length, 'English option missing');
      assert.ok(component.find('label[for="ballotLanguage-Chinese"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="ballotLanguage-Spanish"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="ballotLanguage-Thai"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="ballotLanguage-Korean"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="ballotLanguage-Tagalog"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="ballotLanguage-Hindi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="ballotLanguage-Khmer"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="ballotLanguage-Vietnamese"]').length, 'Vietnamese option missing');
      assert.ok(component.find('.ballot-language-form').length, 'form missing');
    });
  });

});


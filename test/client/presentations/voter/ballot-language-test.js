'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { createMockStore }      from 'redux-test-utils';
import { Provider }             from "react-redux";
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import { MemoryRouter }         from 'react-router-dom'
import * as dataPresent         from '../../../../client/helpers/data-present';
import BallotLanguagePage       from '../../../../client/presentations/voter-registration/ballot-language-form.jsx';

describe('BallotLanguagePage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = (props) => {
    return(
      <Provider store={createMockStore(store)}>
        <MemoryRouter>
          {props.children}
        </MemoryRouter>
      </Provider>
    );
  };

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let ballotLanguage = '';
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };

      let onChange = spy();

      props = {
        ballotLanguage,
        dateOfBirth,
        onChange
      }
    });
    
    it('shows the form asking user to choose language', function() {
      let component = render(
        <Wrapper>
          <BallotLanguagePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ballotLanguageJapanese"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="ballotLanguageEnglish"]').length, 'English option missing');
      assert.ok(component.find('label[for="ballotLanguageChinese"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="ballotLanguageSpanish"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="ballotLanguageThai"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="ballotLanguageKorean"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="ballotLanguageTagalog"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="ballotLanguageHindi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="ballotLanguageKhmer"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="ballotLanguageVietnamese"]').length, 'Vietnamese option missing');
      assert.ok(component.find('.ballot-language-form').length, 'form missing');
    });


    // TODO add testing for if pre-reg is shown in container

  });

});


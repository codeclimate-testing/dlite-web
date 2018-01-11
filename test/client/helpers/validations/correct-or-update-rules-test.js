'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/change-rules';
import messages from '../../../../client/presentations/error-messages';

let props;

describe('update and corrections page validation rules:', function() {
  beforeEach(function() {
    props = {
      correctOrUpdate: '',
      sections: [],
      other: ''
    };
  });
  it('will give error when no answer has been selected', function() {
    assert.deepEqual(rules.correctOrUpdate(props), [messages.applicationActionMissing]);
    assert.deepEqual(rules.sections(props), []);
    assert.deepEqual(rules.other(props), []);
  });

  it('when an answer is selected but no section checkboxes are ticked, it will give an error', function() {
    props.correctOrUpdate = 'correct';
    assert.deepEqual(rules.sections(props), [messages.applicationActionMissing]);
  });

  it('will give error when other checkbox is selected but no text entered in text input', function() {
    props.correctOrUpdate = 'correct';
    props.sections = ['other'];
    assert.deepEqual(rules.other(props), [messages.pleaseEnterValidData]);
  });

  it('will give error when non-english characters are entered into the text input', function(){
    props.correctOrUpdate = 'correct';
    props.sections = ['other'];
    props.other = 'chcę mówić po polsku'
    assert.deepEqual(rules.other(props), [messages.inputIncludesNonEnglishCharacters]);
  });
});


'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import ChangeDetails            from '../../../../client/presentations/cdl/correct-or-update-page.jsx';
import store                    from '../../support/page-store';

describe('CDL Change Details page', function() {
  let props;
  const Wrapper = wrapperGenerator(store);

  beforeEach(function() {
    let cardChanges = {
      correctOrUpdate: '',
      sections: [],
      other: ''
    };

    let onSubmit          = spy();
    let onChange          = spy();

    let validations = {
      correctOrUpdate:      spy(),
      sections:             spy(),
      other:                spy(),
      all:                  spy(),
      isValid: () => { return true; }
    };

    props = {
      cardChanges,
      onSubmit,
      onChange,
      validations
    };
  });

  describe('#initial render', function() {

    it('shows the form asking what the user would like to do', function() {
      let component = render(
        <Wrapper>
          <ChangeDetails {...props} />
        </Wrapper>
      );

      assert.ok(component.find('.choose-card-change').length);
      assert.ok(component.find('label[for="correctOrUpdate-update"]').length);
      assert.ok(component.find('label[for="correctOrUpdate-correct"]').length);
    });

  });

  describe('#making a selection shows checkboxes', function() {
    beforeEach(function() {
      props.cardChanges.correctOrUpdate = 'correct';
    });
    it('shows question asking what user would like to correct', function() {
      let component = render(
        <Wrapper>
          <ChangeDetails {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('What would you like to correct?'));
    });

    describe('##selecting "Other" makes input appear', function() {
      beforeEach(function() {
        props.cardChanges.sections = ['other'];
      });

      it('shows text input', function() {
        let component = render(
          <Wrapper>
            <ChangeDetails {...props} />
          </Wrapper>
        );
        assert.ok(component.find('input#other').length);
      })
    });
  });
});

'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import CorrectOrUpdate          from '../../../../client/presentations/intro/correct-or-update-page.jsx';
import store                    from '../../support/page-store';

describe('CorrectOrUpdate', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        new: [],
        renew: '',
        change: '',
        youthIDInstead: ''
      };
  
      let cardAction = 'change';

      let cardChanges = {
        correctOrUpdate: '',
        sections: []
      };

      let onChange = spy();

      props = {
        cardType,
        cardAction,
        cardChanges,
        onChange
      }
    });

    it('if the user is changing a DL the instruction text mentions DL and has radio buttons', function() {
      props.cardType.change = 'DL';

      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="correctOrUpdate-correct"]').length, 'radio button to select correct is missing');
      assert.ok(component.find('label[for="correctOrUpdate-update"]').length, 'radio button to select update is missing');
      assert.equal(component.text().includes('You may need to pay a fee for a new DL'), true);
    });

    it('making a selection causes the section form to appear', function() {
      props.cardType.change = 'DL'
      props.cardChanges.correctOrUpdate = 'correct';
      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('.change-sections-form').length, 'section form not found');
      assert.equal(component.text().includes('What would you like to correct?'), true);
    });
  });
});


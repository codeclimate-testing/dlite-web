'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import CorrectOrUpdate          from '../../../../client/presentations/get-started/correct-or-update-page.jsx';
import store                    from '../../support/page-store';

describe('CorrectOrUpdate', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        IDDL: [],
        cardAction: 'change',
        youthIDInstead: ''
      };

      let cardChanges = {
        correctOrUpdate: '',
        sections: []
      };

      let onChange = spy();

      let validations = {
        correctOrUpdate: spy(),
        sections: spy(),
        other: spy(),
        all: spy()
      };

      props = {
        cardType,
        cardChanges,
        onChange,
        validations
      }
    });

    it('if the user is changing a DL the instruction text mentions DL and has radio buttons', function() {
      props.cardType.IDDL = ['DL'];

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
      props.cardType.IDDL = ['DL'];
      props.cardChanges.correctOrUpdate = 'correct';
      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('.change-sections-form').length, 'section form not found');
      assert.equal(component.text().includes('What would you like to correct?'), true);
    });

    it('the section form shows 8 checkboxes', function() {
      props.cardType.IDDL = ['DL']
      props.cardChanges.correctOrUpdate = 'correct';
      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('label[for="name"]').length, 'name selection missing');
      assert.ok(component.find('label[for="dateOfBirth"]').length, 'dob selection missing');
      assert.ok(component.find('label[for="sex"]').length, 'sex section selection missing');
      assert.ok(component.find('label[for="address"]').length, 'address selection missing');
      assert.ok(component.find('label[for="licenseType"]').length, 'licenseType selection missing');
      assert.ok(component.find('label[for="endorsements"]').length, 'endorsement selection missing');
      assert.ok(component.find('label[for="restrictions"]').length, 'restrictions selection missing');
      assert.ok(component.find('label[for="other"]').length, 'other selection missing');
    });
  });
});


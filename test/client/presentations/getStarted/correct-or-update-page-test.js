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
import translations             from '../../../../client/i18n';

describe('CorrectOrUpdate', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {

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
        cardType: [],
        cardAction: 'change',
        youthIDInstead: '',
        IDApp: {
          cardChanges,
          action: ''
        },
        DLApp: {
          cardChanges,
          action: ''
        },
        cardChanges,
        onChange,
        validations,
        translations
      }
    });

    it('if the user is changing a DL the instruction text mentions DL and has radio buttons', function() {
      props.cardType= ['DL'];

      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="DL-correctOrUpdate-correct"]').length, 'radio button to select correct is missing');
      assert.ok(component.find('label[for="DL-correctOrUpdate-update"]').length, 'radio button to select update is missing');
      assert.equal(component.text().includes('You may need to pay a fee for a new Driver License with these updates.'), true);
    });

    it('making a selection causes the section form to appear', function() {
      props.cardType= ['DL'];
      props.DLApp.cardChanges.correctOrUpdate = 'correct';
      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('.change-sections-form').length, 'section form not found');
      assert.ok(component.text().includes('What would you like to correct?'));
    });

    it('the section form shows 5 checkboxes', function() {
      props.cardType = ['DL']
      props.DLApp.cardChanges.correctOrUpdate = 'correct';
      let component = render(
        <Wrapper>
          <CorrectOrUpdate {...props}/>
        </Wrapper>
      );
      assert.ok(component.find('label[for="name"]').length, 'name selection missing');
      assert.ok(component.find('label[for="dateOfBirth"]').length, 'dob selection missing');
      assert.ok(component.find('label[for="sex"]').length, 'sex section selection missing');
      assert.ok(component.find('label[for="address"]').length, 'address selection missing');
      assert.ok(component.find('label[for="other"]').length, 'other selection missing');
    });
  });
});


'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';

import NamePage                 from '../../../../client/presentations/intro/name-page.jsx';

describe('NamePage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let legalName = {
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: ''
      };
      let continueDisabled  =   !(dataPresent.legalName(legalName));
      let onChange = spy();

      props = {
        legalName,
        continueDisabled,
        onChange
      }
    });
    
    it('shows form for first name, middle name, last name, and suffix', function() {
      let component = render(
        <Wrapper>
          <NamePage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('input#firstName').length, 'first name input missing');
      assert.ok(component.find('input#middleName').length, 'middle name input missing');
      assert.ok(component.find('input#lastName').length, 'last name input missing');
      assert.ok(component.find('select#suffix').length, 'suffix selection missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <NamePage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting ID makes next button no longer disabled', function() {
      props.legalName = {
        firstName: 'Mathieu',
        middleName: 'Cloud',
        lastName: 'Braytheus',
        suffix: ''
      };
      props.continueDisabled  =   !(dataPresent.cardType(props.cardType));

      let component = render(
        <Wrapper>
          <NamePage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

  });

});


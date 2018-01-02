'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import store                    from '../../support/page-store';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';

import NamePage                 from '../../../../client/presentations/intro/name-page.jsx';

describe('NamePage', function() {
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

      let validations = {
        firstName: spy(),
        middleName: spy(),
        lastName: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        legalName,
        continueDisabled,
        onChange,
        validations
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
      assert.equal(props.continueDisabled, true);
    });

    it('selecting ID makes next button no longer disabled', function() {
      props.legalName = {
        firstName: 'Mathieu',
        middleName: 'Cloud',
        lastName: 'Braytheus',
        suffix: ''
      };
      props.continueDisabled  =   !(dataPresent.legalName(props.legalName));

      let component = render(
        <Wrapper>
          <NamePage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, false);
    });
  });
});


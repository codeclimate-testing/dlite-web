'use strict';

import assert                   from 'assert';

import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import ChooseAppPage            from '../../../../client/presentations/get-started/choose-application-page.jsx';
import store                    from '../../support/page-store';

describe('ChooseApp Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {

      let accordions = {};
      let onChange = spy();
      let validations = {
        chooseApplication: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let locale = 'en';

      props = {
        chooseApp: '',
        accordions,
        onChange,
        validations,
        locale
      }
    });

    it('the form shows a button for the IDDL app,  and a button for the CDL app', function() {
      let component = render(
        <Wrapper>
          <ChooseAppPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="chooseApplication-iddl"]').length, 'IDDL app radio missing');
      assert.ok(component.find('label[for="chooseApplication-cdl"]').length, 'CDL radio missing');
      assert.ok(component.find('.choose-application-form').length, 'form missing');
    });

  });
});


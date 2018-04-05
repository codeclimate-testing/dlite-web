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

  describe('when it renders initially, ', function() {
    let props;

    beforeEach(function() {

      let accordions = {};
      let onChange = spy();
      let validations = {
        chooseApplication: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        chooseApp: '',
        accordions,
        onChange,
        validations,
        server: {
          apiStatus : ''
        }
      }
    });

    it('shows the loading/spinning wheel when its fetching translations from server. ', function() {
      props.server.apiStatus = 'loading';
      let component = render(
        <Wrapper>
          <ChooseAppPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.loading').length, 'spinning wheel missing');
    });

    it('the form shows a button for the IDDL app,  and a button for the CDL app', function() {
      props.server.apiStatus = 'success';
      let component = render(
        <Wrapper>
          <ChooseAppPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="chooseApplication-id-and-license"]').length, 'IDDL app radio missing');
      assert.ok(component.find('label[for="chooseApplication-cdl"]').length, 'CDL radio missing');
      assert.ok(component.find('.choose-application-form').length, 'form missing');
    });

    it('shows the error message on the page when an error occurs during fetching translations from server. ', function() {
      props.server.apiStatus = 'error';
      let component = render(
        <Wrapper>
          <ChooseAppPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.error-message').length, 'error message missing');
    });

  });
});


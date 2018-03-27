'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import CurrentCDLPage           from '../../../../client/presentations/cdl/current-cdl-page.jsx';
import store                    from '../../support/page-store';

describe('Current CDL Page', function() {
  let props, component;
  const Wrapper = wrapperGenerator(store);

  beforeEach(function() {
    let currentCardInfo = {
      number: '',
      month: '',
      day: '',
      year: ''
    }

    let onSubmit          = spy();
    let onChange          = spy();

    let validations = {
      number:   spy(),
      day:      spy(),
      month:    spy(),
      year:     spy(),
      all:      spy(),
      isValid: () => { return true; }
    };

    props = {
      currentCardInfo,
      onSubmit,
      onChange,
      validations
    };
  });

  describe('#initial render', function() {
    beforeEach(function() {
      component = render(
        <Wrapper>
          <CurrentCDLPage {...props} />
        </Wrapper>
      );
    });

    it('shows the form asking user to input current CDL number', function() {
      assert.ok(component.find('.current-card-form').length);
    });
    it('shows the inputs', function() {
      assert.ok(component.find('input#number').length, 'number input missing');
      assert.ok(component.find('input#month').length, 'month input missing');
      assert.ok(component.find('input#day').length, 'day input missing');
      assert.ok(component.find('input#year').length, 'year input missing');
    });
  });

});
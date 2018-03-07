'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import MedicalHistory           from '../../../../client/presentations/cdl/my-history/medical-history-page.jsx';
import store                    from '../../support/page-store';
import translations             from '../../../../client/i18n';

describe('CDL Medical History Page', function() {
  let props, component;
  const Wrapper = wrapperGenerator(store);

  beforeEach(function() {
    let onSubmit          = spy();
    let onChange          = spy();
    let focused           = '';

    let validations = {
      hasMedicalCondition:spy(),
      medicalInfo:        spy(),
      all:                spy(),
      isValid: () => { return true; }
    };

    props = {
      medicalHistory: {
        hasMedicalCondition: '',
        medicalInfo: ''
      },
      onSubmit,
      onChange,
      validations,
      focused,
      locale: 'en'
    };
  });

  describe('#initial render', function() {
    beforeEach(function() {
      component = render(
        <Wrapper>
          <MedicalHistory {...props} />
        </Wrapper>
      );
    });

    it('shows the bullet list of example conditions', function() {
      assert.ok(component.find('.medical-history.bullet-list').length);
    });

    it('shows the form asking if user has or has had medical condition', function() {
      assert.ok(component.find('.medical-condition-form').length);
    });
  });

  describe('#selecting "Yes"', function() {
    beforeEach(function() {
      props.medicalHistory.hasMedicalCondition = 'Yes';
    });
    it('expands to show text input for user to input medical info', function() {
      component = render(
        <Wrapper>
          <MedicalHistory {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.enter-medical-info').length);
    });
  });
});

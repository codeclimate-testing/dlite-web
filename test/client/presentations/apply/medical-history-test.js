'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';

import MedicalPage              from '../../../../client/presentations/apply/medical-condition-info.jsx';

describe('MedicalHistoryPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);


  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let medicalHistory = {
        hasMedicalCondition: '',
      }
      let continueDisabled = !(dataPresent.medicalHistory(medicalHistory));
      let onChange = spy();

      props = {
        medicalHistory,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the yes/no form asking if user has medical condition', function() {
      let component = render(
        <Wrapper>
          <MedicalPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hasMedicalConditionYes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="hasMedicalConditionNo"]').length, 'no button missing');
      assert.ok(component.find('.medical-info').length, 'form missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <MedicalPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled', function() {
      props.medicalHistory.hasMedicalCondition = 'No';
      props.continueDisabled  =   !(dataPresent.medicalHistory(props.medicalHistory));

      let component = render(
        <Wrapper>
          <MedicalPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

    // add this test once container and presentations are refactored so test has access to this component
    // it('selecting Yes makes form appear asking for more info', function() {
    //   props.medicalHistory.hasMedicalCondition = 'Yes';
    //   let component = render(
    //     <Wrapper>
    //       <MedicalPage {...props} />
    //     </Wrapper>
    //   );
    //   assert.ok(component.find('.enter-medical-info'));
    // });

  });

});


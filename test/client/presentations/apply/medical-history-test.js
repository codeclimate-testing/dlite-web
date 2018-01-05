'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';

import MedicalPage              from '../../../../client/presentations/apply/medical-history-page.jsx';
import store                    from '../../support/page-store';

describe('MedicalHistoryPage', function() {
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
      assert.ok(component.find('label[for="hasMedicalCondition-Yes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="hasMedicalCondition-No"]').length, 'no button missing');
      assert.ok(component.find('.medical-condition-form').length, 'form missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <MedicalPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, true);
    });

    it('selecting No makes next button no longer disabled', function() {
      props.medicalHistory.hasMedicalCondition = 'No';
      props.continueDisabled  =   !(dataPresent.hasMedicalCondition(props.medicalHistory));

      let component = render(
        <Wrapper>
          <MedicalPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, false);
    });

     it('selecting Yes makes form appear asking for more info', function() {
       props.medicalHistory.hasMedicalCondition = 'Yes';
       let component = render(
         <Wrapper>
           <MedicalPage {...props} />
         </Wrapper>
       );
       assert.ok(component.find('.enter-medical-info').length, 'Medical info form does not appear');
     });
  });
});


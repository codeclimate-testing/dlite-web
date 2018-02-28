'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import store                    from '../../support/page-store';
import * as dataPresent         from '../../../../client/helpers/data-present';
import ReducedFeePage           from '../../../../client/presentations/get-started/reduced-fee-page.jsx';

describe('Reduced Fee Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let onChange = spy();
      let reducedFee = {
        ID: '',
        form: ''
      };

      let validations = {
        form: spy(),
        reducedFee: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let locale = 'en';
      props = {
        cardType: ['ID'],
        cardAction: 'new',
        youthIDInstead: '',
        DLApp: {
          isApplying: false
        },
        IDApp: {
          isApplying: true,
          action: 'new',
          reducedFee
        },
        reducedFee,
        onChange,
        validations,
        locale
      }
    });

    it('shows a form asking if I am applying for a reduced fee ID', function() {
      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ID-Yes"]').length, 'reduced Yes button missing');
      assert.ok(component.find('label[for="ID-No"]').length, 'reduced No button missing');
    });

    it('selecting Yes makes FAQ drawer and info message show up', function() {
      props.IDApp.reducedFee.ID = 'Yes';
      props.continueDisabled  =   !(dataPresent.reducedFee(props.IDApp.reducedFee));
      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );

      assert.ok(component.find('#reduced-fee-form-info-accordion').length, 'FAQ missing');
      assert.ok(component.find('.message-box').length, 'message box missing');
    });

    it('has special language if user is getting both new ID and new DL', function() {
      props.cardType = ['ID', 'DL'];
      props.IDApp.isApplying = true;
      props.DLApp.isApplying = true;

      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('This only applies to your ID Card.'), true);
    })
  });
});


'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import store                    from '../../support/page-store';
import * as dataPresent         from '../../../../client/helpers/data-present';
import ReducedFeePage           from '../../../../client/presentations/intro/reduced-fee-page.jsx';

describe('Reduced Fee Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let reducedFee = {
        ID: '',
        form: ''
      };
      let cardType = {
        new: ['ID'],
        renew: '',
        youthIDInstead: ''
      };
      let continueDisabled  =   !(dataPresent.reducedFee(reducedFee));
      let onChange = spy();

      props = {
        reducedFee,
        cardType,
        onChange,
        continueDisabled
      }
    });

    it('shows a form asking if I am applying for a reduced fee ID', function() {
      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="IDYes"]').length, 'reduced Yes button missing');
      assert.ok(component.find('label[for="IDNo"]').length, 'reduced No button missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, true);
    });

    it('selecting No makes next button no longer disabled', function() {
      props.reducedFee.ID = 'No';
      props.continueDisabled  =   !(dataPresent.reducedFee(props.reducedFee));

      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, false);
    });

    it('selecting Yes makes form show asking if user has the correct forms', function() {
      props.reducedFee.ID = 'Yes';
      props.continueDisabled  =   !(dataPresent.reducedFee(props.reducedFee));
      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="formYes"]').length, 'form Yes button missing');
      assert.ok(component.find('label[for="formNo"]').length, 'form No button missing');
    });

    it('has special language if user is getting both new ID and new DL', function() {
      props.cardType.new = ['ID', 'DL'];

      let component = render(
        <Wrapper>
          <ReducedFeePage  {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('This only applies to your ID Card.'), true);
    })
  });
});


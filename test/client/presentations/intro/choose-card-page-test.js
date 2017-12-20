'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import ChooseCardPage           from '../../../../client/presentations/intro/choose-card-page.jsx';
import store                    from '../../support/page-store';

describe('ChooseCardPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        ID: '',
        DL: ''
      };

      let onChange = spy();

      props = {
        cardType,
        onChange
      }
    });

    it('shows a button for ID and a button for DL', function() {
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ID"]').length, 'ID checkbox missing');
      assert.ok(component.find('label[for="DL"]').length, 'DL checkbox missing');
    });

    it('next button is disabled', function() {
      let continueDisabled  =   !(dataPresent.cardType(props.cardType));
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props}
          continueDisabled = { continueDisabled }
          />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting ID makes next button no longer disabled', function() {
      props.cardType.ID = true;
      let continueDisabled  =   !(dataPresent.cardType(props.cardType));

      let component = render(
        <Wrapper>
          <ChooseCardPage {...props}
          continueDisabled = { continueDisabled }
          />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });
  });
});

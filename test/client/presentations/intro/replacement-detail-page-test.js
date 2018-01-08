'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import ReplacementDetail        from '../../../../client/presentations/intro/replacement-details-page.jsx';
import store                    from '../../support/page-store';

describe('ReplacementDetails', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        new: [],
        renew: '',
        change: '',
        replace: '',
        youthIDInstead: ''
      };
  
      let cardAction = 'replace';

      let cardReplacement = {
        reason: ''
      };

      let onChange = spy();

      props = {
        cardType,
        cardAction,
        cardReplacement,
        onChange
      }
    });

    it('if the user is replacinga DL the instruction text mentions DL and has radio buttons', function() {
      props.cardType.replace = 'DL';

      let component = render(
        <Wrapper>
          <ReplacementDetail {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="reason-lostOrStolen"]').length, 'radio button to select correct is missing');
      assert.ok(component.find('label[for="reason-damaged"]').length, 'radio button to select update is missing');
      assert.ok(component.find('label[for="reason-other"]').length, 'radio button to select update is missing');
    });
  });
});


'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import ReplacementDetail        from '../../../../client/presentations/get-started/replacement-details-page.jsx';
import store                    from '../../support/page-store';

describe('ReplacementDetails', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {

      let cardReplacement = {
        reason: ''
      };

      let validations = {
        reason: spy(),
        isValid: () => { return true;}
      };

      let onChange = spy();
      let locale = 'en';
      props = {
        cardType: [],
        cardAction: 'replace',
        IDApp: {
          isApplying: false,
          action: '',
          cardReplacement
        },
        DLApp: {
          isApplying: false,
          action: '',
          cardReplacement
        },
        onChange,
        validations,
        locale
      }
    });

    it('if the user is replacing a DL the form has radio buttons', function() {
      props.cardType = ['DL'];

      let component = render(
        <Wrapper>
          <ReplacementDetail {...props} />
        </Wrapper>
      );

      assert.ok(component.find('label[for="DL-reason-lostOrStolen"]').length, 'radio button to select correct is missing');
      assert.ok(component.find('label[for="DL-reason-damaged"]').length, 'radio button to select update is missing');
      assert.ok(component.find('label[for="DL-reason-other"]').length, 'radio button to select update is missing');
    });
  });
});


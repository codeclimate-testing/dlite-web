'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import ChoosePartyPage          from '../../../../client/presentations/voter-registration/voter-choose-party-form.jsx';

describe('ChoosePartyPage ', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let politicalPartyChoose = {
        isSelected: ''
      };

      let onChange = spy();

      props = {
        politicalPartyChoose,
        onChange
      }
    });
    
    it('shows the form asking if user would like to choose political party', function() {
      let component = render(
        <Wrapper>
          <ChoosePartyPage   {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.choose-party').length, 'form missing');
    });

    // TODO add test for selecting Yes adds form letting user choose the party

  });

});


'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import NamesHistoryPage         from '../../../../client/presentations/apply/names-history-page.jsx';
import store                    from '../../support/page-store';

describe('NamesHistoryPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let namesHistory = {
        hasUsedPreviousNames: '',
        previousNames: ''
      }

      let continueDisabled = !(dataPresent.hasPreviousNames(namesHistory))
      let onChange = spy();

      props = {
        namesHistory,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if you have ever had a different name', function() {
      let component = render(
        <Wrapper>
          <NamesHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hasUsedPreviousNamesNo"]').length, 'No button missing');
      assert.ok(component.find('label[for="hasUsedPreviousNamesYes"]').length, 'Yes button missing');
      assert.ok(component.find('.previous-names-form').length, 'form missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <NamesHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled', function() {
      props.namesHistory.hasPreviousNames = 'No';
      props.continueDisabled  =   !(dataPresent.hasPreviousNames(props.namesHistory));

      let component = render(
        <Wrapper>
          <NamesHistoryPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

     it('selecting Yes makes form appear asking for previous names', function() {
       props.namesHistory.hasUsedPreviousNames = 'Yes';
       let component = render(
         <Wrapper>
           <NamesHistoryPage {...props} />
         </Wrapper>
       );
       assert.ok(component.find('.enter-previous-names'));
     });
  });
});


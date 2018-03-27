'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import NamesHistoryPage         from '../../../../client/presentations/my-history/names-history-page.jsx';
import store                    from '../../support/page-store';

describe('NamesHistoryPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let namesHistory = {
        hasUsedPreviousNames: '',
        previousNames: ''
      };

      let validations = {
        hasUsedPreviousNames: spy(),
        previousNames: spy(),
        all: spy()
      };

      let onChange = spy();

      props = {
        namesHistory,
        validations,
        onChange
      }
    });

    it('shows the form asking if you have ever had a different name', function() {
      let component = render(
        <Wrapper>
          <NamesHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hasUsedPreviousNames-No"]').length, 'No button missing');
      assert.ok(component.find('label[for="hasUsedPreviousNames-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('.previous-names-form').length, 'form missing');
    });

     it('selecting Yes makes form appear asking for previous names', function() {
       props.namesHistory.hasUsedPreviousNames = 'Yes';
       let component = render(
         <Wrapper>
           <NamesHistoryPage {...props} />
         </Wrapper>
       );
       assert.ok(component.find('.enter-previous-names').length, 'Previous names form does not appear');
     });
  });
});


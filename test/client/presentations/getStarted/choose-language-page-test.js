'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import AppLanguagePage          from '../../../../client/presentations/get-started/choose-language-page.jsx';
import store                    from '../../support/page-store';

describe('BallotLanguagePage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let appLanguage = '';
      let onChange = spy();

      props = {
        appLanguage,
        onChange
      };
    });

    it('shows the form asking user to choose language', function() {
      let component = render(
        <Wrapper>
          <AppLanguagePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="appLanguage-ja"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="appLanguage-en"]').length, 'English option missing');
      assert.ok(component.find('label[for="appLanguage-zh"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="appLanguage-es"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="appLanguage-th"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="appLanguage-ko"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="appLanguage-tl"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="appLanguage-hi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="appLanguage-km"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="appLanguage-vi"]').length, 'Vietnamese option missing');
    });
  });

});


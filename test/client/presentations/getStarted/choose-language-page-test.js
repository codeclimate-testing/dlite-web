'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import LanguagePage             from '../../../../client/presentations/get-started/choose-language-page.jsx';
import store                    from '../../support/page-store';

describe('BallotLanguagePage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props, component, server;

    beforeEach(function() {
      let language = '';
      let onChange = spy();
      server = {apiStatus: ''};
      props = {
        language,
        onChange,
        server
      };

      component = render(
        <Wrapper>
          <LanguagePage  {...props} />
        </Wrapper>
      );
    });

    it('shows 10 labels with 2-character values', function() {
      assert.ok(component.find('label[for="language-ja"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="language-en"]').length, 'English option missing');
      assert.ok(component.find('label[for="language-zh"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="language-es"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="language-th"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="language-ko"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="language-tl"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="language-hi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="language-km"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="language-vi"]').length, 'Vietnamese option missing');
    });

    it('no option is selected on initial render', function() {
      assert.ok(!component.find('.selected').length, 'option is already selected');
    });

    it('hides the page if the api is loading', function() {
      server = {apiStatus: 'loading'};
      props.server = server;

      component = render(
        <Wrapper>
          <LanguagePage  {...props} />
        </Wrapper>
      );

      assert.ok(component.find('.hide').length, 'page is not hidden by api status');
    });
  });
});


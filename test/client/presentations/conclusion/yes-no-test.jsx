'use strict';

import assert           from 'assert';
import React            from 'react';
import {
  Yes,
  No
}           from '../../../../client/presentations/conclusion/summary/yes-no.jsx';
import { render }       from 'enzyme';


describe('Yes-No components on summary pages', function() {
  let props;
  let locale = 'en';
  beforeEach(function() {
    props = {
      title: '',
      showIf: '',
      locale
    };
  });

  describe('#Yes', function() {
    it('renders "Yes" if showIf is true', function() {
      props.showIf = true;
      let component = render(
        <Wrapper>
          <Yes {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('Yes'));
    });
    it('does not render if showIf is false', function() {
      props.showIf = false;
      let component = render(
        <Wrapper>
          <Yes {...props} />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Yes'));
    });
    it('shows the title passed as props', function() {
      props.showIf = true;
      props.title = 'sample title';
      let component = render(
        <Wrapper>
          <Yes {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('sample titleYes'));
    });
  });

  describe('#No', function() {
    it('renders "No" if showIf is true', function() {
      props.showIf = true;
      let component = render(
        <Wrapper>
          <No {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('No'));
    });
    it('does not render if showIf is false', function() {
      props.showIf = false;
      let component = render(
        <Wrapper>
          <No {...props} />
        </Wrapper>
      );
      assert.ok(!component.text().includes('No'));
    });
    it('shows the title passed as props', function() {
      props.showIf = true;
      props.title = 'sample title';
      let component = render(
        <Wrapper>
          <No {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('sample titleNo'));
    });
  });

});
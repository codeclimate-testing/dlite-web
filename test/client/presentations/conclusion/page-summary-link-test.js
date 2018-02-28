'use strict';

import assert           from 'assert';
import React            from 'react';
import PageSummaryLink  from '../../../../client/presentations/conclusion/summary/Page-summary-link.jsx';
import { render }       from 'enzyme';
import wrapperGenerator from '../../support/wrapper';
import store            from '../../support/page-store';
import { pathForPage }  from '../../../../client/helpers/navigation/page';

describe('PageSummaryLink edit buttons on summary pages', function() {
  const Wrapper = wrapperGenerator(store);
  let component, props;
  let locale = 'en';
  beforeEach(function() {
    props = {
      name: 'addWdywtdt',
      summary: 'summary',
      locale
    };
    component = render(
      <Wrapper>
        <PageSummaryLink {...props} />
      </Wrapper>
    );
  });

  it('has a link with a className equal to the props.name', function() {
    let className = '.'+props.name;
    assert.ok(component.find(className).length)
  });
  it('has a link that directs to the url associated with the props.name key', function() {
    let className = '.'+props.name;
    let url = pathForPage(props.name);
    assert.equal(component.find(className)[0].attribs.href, url);
  });

});
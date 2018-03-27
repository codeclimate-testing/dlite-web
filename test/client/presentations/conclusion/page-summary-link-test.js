'use strict';

import assert           from 'assert';
import React            from 'react';
import PageSummaryLink  from '../../../../client/presentations/page-summary-link.jsx';
import { render }       from 'enzyme';
import wrapperGenerator from '../../support/wrapper';
import store            from '../../support/page-store';
import { pathForPage }  from '../../../../client/helpers/navigation/page';

describe('PageSummaryLink edit buttons on summary pages', function() {
  const Wrapper = wrapperGenerator(store);
  let component, props;
  beforeEach(function() {
    props = {
      editKey: 'wdywtdt',
      cardType: 'ID',
      flow: ''
    };
    component = render(
      <Wrapper>
        <PageSummaryLink {...props} />
      </Wrapper>
    );
  });

  it('has a link with a className that includes props.editKey', function() {
    let className = '.'+props.editKey;
    assert.ok(component.find(className).length)
  });
  it('has a link with a className that includes props.cardType', function() {
    let className = '.'+props.cardType;
    assert.ok(component.find(className).length)
  });

  it('has a link that directs to the url associated with the props.editKey key', function() {
    let className = '.'+props.editKey;
    props.flow = 'edit';
    let url = pathForPage(props.editKey, props);
    assert.equal(component.find(className)[0].attribs.href, url);
  });

  it('has a button that has the text "Edit" if no prop.add is passed', function() {
    assert.ok(component.text().includes('Edit'));
  });

  it('has a button that has the text "Add" if props.add is passed', function() {
    props.add = true;
    let component = render(
      <Wrapper>
        <PageSummaryLink {...props} />
      </Wrapper>
    );
    assert.ok(component.text().includes('Add'));
    assert.ok(!component.text().includes('Edit'));
  });

});
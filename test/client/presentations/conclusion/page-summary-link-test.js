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

  describe('#add an IDDL app from summary page', function() {
    props = {
      editKey: 'wdywtdt',
      cardType: 'ID',
      linkType: 'summary-add'
    };
    component = render(
      <Wrapper>
        <PageSummaryLink {...props} />
      </Wrapper>
    );

    it('has a link with a className that includes props.editKey', function() {
      let className = '.'+props.editKey;
      assert.ok(component.find(className).length)
    });
    it('has a link with a className that includes props.cardType', function() {
      let className = '.'+props.cardType;
      assert.ok(component.find(className).length)
    });
    it('has a link with an id that includes props.linkType', function() {
      let className = '.'+props.editKey;
      assert.ok(component.find(className)[0].attribs.id.includes(props.linkType))
    });
    it('has a button with text "Add"', function() {
      assert.ok(component.text().includes('Add'));
    });
  });

  describe('#editing an app from summary page', function() {
    beforeEach(function() {
      props = {
        editKey: 'legalName',
        linkType: 'summary-edit'
      };
      component = render(
        <Wrapper>
          <PageSummaryLink {...props} />
        </Wrapper>
      );
    });

    it('has a link with className .legalName and id summary-edit', function() {
      let className = '.'+props.editKey;
      assert.ok(component.find('a'+className)[0].attribs.id.includes(props.linkType));
    });
    it('has a button with text "Edit"', function() {
      assert.ok(component.text().includes('Edit'));
    });
    it('has a button with edit icon', function() {
      assert.ok(component.find('.edit-icon').length);
    });
  });

  describe('#editing an app from open-applications page', function() {
    beforeEach(function() {
      props = {
        editKey: 'legalName',
        linkType: 'open-edit'
      };
      component = render(
        <Wrapper>
          <PageSummaryLink {...props} />
        </Wrapper>
      );
    });

    it('has a link with className open-edit.legalName', function() {
      let className = '.'+props.editKey;
      assert.ok(component.find('a'+className)[0].attribs.id.includes(props.linkType));
    });
    it('has a button with text "Edit"', function() {
      assert.ok(component.text().includes('Edit'));
    });
    it('has a button with edit icon', function() {
      assert.ok(component.find('.edit-icon').length);
    });
  });

  describe('#adding an app from open-applications page', function() {
    beforeEach(function() {
      props = {
        editKey: 'legalName',
        linkType: 'open-add'
      };
      component = render(
        <Wrapper>
          <PageSummaryLink {...props} />
        </Wrapper>
      );
    });

    it('has a link with className .legalName id open-add', function() {
      let className = '.'+props.editKey;
      assert.ok(component.find('a'+className)[0].attribs.id.includes(props.linkType));
    });
    it('has a button with text "Add"', function() {
      assert.ok(component.text().includes('Add'));
    });
    it('has a button with add icon', function() {
      assert.ok(component.find('.add-icon').length);
    });
  });

});
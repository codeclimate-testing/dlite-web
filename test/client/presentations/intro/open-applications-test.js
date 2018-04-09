'use strict';

import assert               from 'assert';
import React                from 'react';
import configure            from '../../support/configure-enzyme';
import { render }           from 'enzyme';
import { spy }              from 'sinon';
import store                from '../../support/page-store';
import wrapperGenerator     from '../../support/wrapper';
import OpenApplications     from '../../../../client/presentations/intro/open-applications.jsx';


describe('Open Applications page', function() {
  const Wrapper = wrapperGenerator(store);
  let apps, component, props;
  beforeEach(function() {
    props = {
      apiStatus: '',
      userData: {
        apps: [{
          cardType: [],
          cardAction: [],
          name: ''
        }],
        userID: '',
        appsLength: ''
      }
    };
  });

  describe('initial render', function() {
    beforeEach(function() {
      component = render(
        <Wrapper>
          <OpenApplications {...props} />
        </Wrapper>
      );
    });

    it('shows add button to add an IDDL app', function() {
      assert.ok(component.find('.id-and-license').text().includes('ID or driver license'));
      assert.ok(component.find('.id-and-license').text().includes('Add'));
      assert.ok(component.find('a.legalName[href="/apply/id-and-license/my-basics/legal-name"]').length);
    });
    it('shows add button to add a CDL app', function() {
      assert.ok(component.find('.cdl').text().includes('Commercial driver license'));
      assert.ok(component.find('.cdl').text().includes('Add'));
      assert.ok(component.find('a.cdlLegalName[href="/apply/cdl/my-basics/true-name"]').length);
    });
  });

  it('shows error message if apiStatus is error', function() {
    props.apiStatus = 'error';
    let component = render(
      <Wrapper>
        <OpenApplications {...props} />
      </Wrapper>
    );
    assert.ok(component.find('.error').length);
  });

});



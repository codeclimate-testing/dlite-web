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
          name: '',
          id: ''
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
      assert.ok(component.find('a.open-add').length)
    });
    it('shows add button to add a CDL app', function() {
      assert.ok(component.find('.cdl').text().includes('Commercial driver license'));
      assert.ok(component.find('.cdl').text().includes('Add'));
      assert.ok(component.find('a.open-add').length)
    });
  });

  describe('multiple applications', function() {
    beforeEach(function() {
      props.userData = {
        userID: '3f',
        appsLength: 2,
        apps: [{
          id: '1',
          name: 'person 1',
          cardType: ['ID'],
          cardAction: ['new']
        }, {
          id: '2',
          name: 'person 2',
          cardType: ['ID'],
          cardAction: ['replace']
        }]
      };
      component = render(
        <Wrapper>
          <OpenApplications {...props} />
        </Wrapper>
      );
    });

    it('shows an edit button to edit id 1', function() {
      assert.ok(component.find('a.1.open-edit').length);
    });
    it('shows an edit button to edit id 2', function() {
      assert.ok(component.find('a.2.open-edit').length);
    });
    it('the edit button goes to the summary', function() {
      assert.ok(component.find('a.1.summary').length);
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



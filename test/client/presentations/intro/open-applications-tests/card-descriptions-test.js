'use strict';

import assert               from 'assert';
import React                from 'react';
import configure            from '../../../support/configure-enzyme';
import { render }           from 'enzyme';
import { spy }              from 'sinon';
import store                from '../../../support/page-store';
import wrapperGenerator     from '../../../support/wrapper';
import {
  CardDescription,
  Applications
 }  from '../../../../../client/presentations/intro/open-applications/card-description.jsx';


describe('Card description file', function() {
  const Wrapper = wrapperGenerator(store);

  describe('#CardDescription sub-component', function() {
    let cardType;
    beforeEach(function() {
      cardType = [];
    });

    it('getting ID', function() {
      cardType = ['ID'];
      let component = render(
        <Wrapper>
          <CardDescription cardType={cardType} />
        </Wrapper>
      );
      assert.ok(component.text().includes('Applying for an ID card'));
    });

    it('getting DL', function() {
      cardType = ['DL'];
      let component = render(
        <Wrapper>
          <CardDescription cardType={cardType} />
        </Wrapper>
      );
      assert.ok(component.text().includes('Applying for a driver license'));
    });

    it('getting CDL', function() {
      cardType = ['CDL'];
      let component = render(
        <Wrapper>
          <CardDescription cardType={cardType} />
        </Wrapper>
      );
      assert.ok(component.text().includes('Applying for a commercial driver license'));
    });

    it('getting both DL and ID', function() {
      cardType = ['DL', 'ID'];
      let component = render(
        <Wrapper>
          <CardDescription cardType={cardType} />
        </Wrapper>
      );
      assert.ok(component.text().includes('Applying for a driver license and an ID card'));
    });
  });

  describe('#page summary link', function() {
    let props;

    beforeEach(function(){
      props = {
        apps: [{
          cardAction: ['new'],
          cardType: ['CDL'],
          id: '1',
          name: 'some name',
          pathname: ''
        }]
      }
    });
    it('has a page summary link with nextAddress equal to app.pathname', function() {
      props.apps[0].pathname = '/apply/id-and-license/voting-registration/confirmation';
      let component = render(
        <Wrapper>
          <Applications {...props} />
        </Wrapper>
      );
      assert.equal(component.find('.cdlLegalName')[0].attribs.id, 'open-edit 1 /apply/id-and-license/voting-registration/confirmation');
    });

    it('has a page summary link with nextAddress to summary if app.pathname is in edit flow', function() {
      props.apps[0].pathname = '/apply/id-and-license/edit/my-basics/legal-name';
      let component = render(
        <Wrapper>
          <Applications {...props} />
        </Wrapper>
      );
      assert.equal(component.find('.cdlLegalName')[0].attribs.id, 'open-edit 1 /apply/id-and-license/summary');
    });

    it('has a page summary link with no nextAddress prop if app.pathname is blank', function() {
      props.apps[0].pathname = '';
      let component = render(
        <Wrapper>
          <Applications {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.cdlLegalName')[0].attribs.id, 'open-edit 1 ');
    });
  });
});



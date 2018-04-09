'use strict';

import assert               from 'assert';
import React                from 'react';
import configure            from '../../../support/configure-enzyme';
import { render }           from 'enzyme';
import { spy }              from 'sinon';
import store                from '../../../support/page-store';
import wrapperGenerator     from '../../../support/wrapper';
import { Applications }     from '../../../../../client/presentations/intro/open-applications/card-description.jsx';


describe('Open Applications summaries', function() {
  const Wrapper = wrapperGenerator(store);
  let apps, component;

  describe('# single IDDL and single CDL', function() {
    beforeEach(function() {
      apps = [{
        cardType: ['ID'],
        cardAction: ['renew'],
        name: 'Mr. Renew My ID',
        id: '1'
      }, {
        cardType: ['CDL'],
        cardAction: ['change-update'],
        name: 'Ms. Update My CDL',
        id: '2'
      }];
      component = render(
        <Wrapper>
          <Applications apps={apps} />
        </Wrapper>
      );
    });

    it('shows the name associated with each application', function() {
      assert.ok(component.find('.1').text().includes('Mr. Renew My ID'));
      assert.ok(component.find('.2').text().includes('Ms. Update My CDL'));
    });

    it('shows the card type for each application', function() {
      assert.ok(component.find('.1').text().includes('Applying for an ID card'));
      assert.ok(!component.find('.1').text().includes('Applying for a driver license'));
      assert.ok(!component.find('.1').text().includes('Applying for a commercial driver license'));
      assert.ok(!component.find('.1').text().includes('Applying for a driver license and an ID card'));

      assert.ok(component.find('.2').text().includes('Applying for a commercial driver license'));
      assert.ok(!component.find('.2').text().includes('Applying for an ID card'));
      assert.ok(!component.find('.2').text().includes('Applying for a driver license'));
      assert.ok(!component.find('.2').text().includes('Applying for a driver license and an ID card'));
    });
    it('links to legalName editkey for IDDL app', function() {
      assert.ok(component.find('.1 .legalName.summary'), 'edit key is wrong');
    });

    it('links to cdlLegalName editkey for cdl app', function() {
      assert.ok(component.find('.2 .cdlLegalName.summary'), 'edit key is wrong');
    });

    it('passes first cardtype value as props to PageSummaryLink', function() {
      assert.ok(component.find('.1 .summary.ID'), 'cardType is wrong');
      assert.ok(component.find('.2 .summary.CDL'), 'cardType is wrong');
    });
  });

  describe('# user getting both new ID and DL', function() {
    beforeEach(function() {
      apps = [{
        cardType: ['ID', 'DL'],
        cardAction: ['new', 'new'],
        name: 'Mx. Get New ID and DL',
        id: '1'
      }];

      component = render(
        <Wrapper>
          <Applications apps={apps} />
        </Wrapper>
      );
    });

    it('shows user is getting both ID and DL', function() {
      assert.ok(component.find('.1').text().includes('Applying for a driver license and an ID card'));
    });

    it('passes legalName as editKey', function() {
      assert.ok(component.find('.1 .legalName.summary'), 'edit key is wrong');
    });

    it('passes both values in cardType array as props to PageSummaryLink', function() {
      assert.ok(component.find('.summary.button.ID.DL'))
    });
  });

  describe('# double IDDL', function() {
    beforeEach(function() {
      apps = [{
        cardType: ['ID', 'DL'],
        cardAction: ['new', 'renew'],
        name: 'OBE I got two cards, one for the new and one to renew',
        id: '1'
      }];

      component = render(
        <Wrapper>
          <Applications apps={apps} />
        </Wrapper>
      );
    });
    it('shows user is getting both ID and DL', function() {
      assert.ok(component.find('.1').text().includes('Applying for a driver license and an ID card'));
    });

    it('passes first cardType value as props to PageSummaryLink', function() {
      assert.ok(component.find('.summary.ID'), 'cardType is wrong');
      assert.equal(component.find('.summary.button.DL'), false)
    });
  });
});



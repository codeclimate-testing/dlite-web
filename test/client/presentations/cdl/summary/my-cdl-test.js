'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import translations     from '../../../../../client/i18n';
import MyApp            from '../../../../../client/presentations/cdl/summary/cdl-app.jsx';

describe('CDL Summary My CDL Application section', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = {
      ui: {
        locale: 'en'
      },
      cdl: {
        cardAction: '',
        currentCardInfo: {
          month: '',
          day: '',
          year: '',
          number: ''
        }
      }
    };
  });

  describe('#CdlAction', function() {
    it('does not render if cardAction is blank', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('I am'));
    });

    it('shows user getting a new CDL if cardAction equals new', function() {
      props.cdl.cardAction = 'new';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amApplying for the first time'));
    });

    it('shows user renewing a CDL if cardAction equals renew', function() {
      props.cdl.cardAction = 'renew';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('I amRenewing'));
    });
  });

  describe('#CurrentCardInfo', function() {
    it('does not render if props.currentCardInfo is blank', function() {
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('CDL number:'));
    });

    it('shows "CDL number: None" if user has given a date but not CDL card number', function() {
      props.cdl.currentCardInfo.month = '10';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('CDL number:None'));
    });

    it('shows the CDL number', function() {
      props.cdl.currentCardInfo.number = '99999';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('CDL number:99999'));
    });

    it('does not show the date if only a partial date given', function() {
      props.cdl.currentCardInfo.year = '1999';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Expiration date'));
    });

    it('shows the full date', function() {
      props.cdl.currentCardInfo.year = '2000';
      props.cdl.currentCardInfo.month = '09';
      props.cdl.currentCardInfo.day = '03';
      let component = render(
        <Wrapper>
          <MyApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Expiration date:09/03/2000'));
    });
  });

});
'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import translations     from '../../../../../client/i18n';
import MyHistory        from '../../../../../client/presentations/cdl/summary/my-history.jsx';

describe('CDL Summary My Basics section', function() {
  const Wrapper = wrapperGenerator(store);
  let props, component;

  beforeEach(function() {
    props = {
      ui: {
        locale: 'en'
      },
      cdl: {
        history: {
          currentDLInfo: {
            number:   '',
            month:        '',
            day:          '',
            year:         '',
            isIssued:     '',
            issuedBy:     ''
          }
        }
      }
    };
    component = render(
      <Wrapper>
        <MyHistory { ...props } />
      </Wrapper>
    );
  });

  describe('#Current DL Info', function() {
    it('does not render if no info provided', function() {
      assert.ok(!component.text().includes('Current DL number:'))
    });

    it('says "None" if user has indicated they do not have a current DL', function() {
      props.cdl.history.currentDLInfo.isIssued = 'No';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Current DL number:None'), 'None text missing');
    });

    it('shows current DL number if number provided', function() {
      props.cdl.history.currentDLInfo.isIssued = 'Yes';
      props.cdl.history.currentDLInfo.number = 'A10157';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Current DL number:A10157'), 'Number missing');
    });

    it('shows expiration date if provided', function() {
      props.cdl.history.currentDLInfo.isIssued = 'Yes';
      props.cdl.history.currentDLInfo.number = 'A10157';
      props.cdl.history.currentDLInfo.month = '4';
      props.cdl.history.currentDLInfo.day = '27';
      props.cdl.history.currentDLInfo.year = '4058';
      component = render(
        <Wrapper>
          <MyHistory { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Expiration date:4/27/4058'), 'expiration date missing');
    });
  });

});
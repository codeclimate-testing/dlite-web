'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../support/page-store';
import wrapperGenerator from '../../support/wrapper';
import translations     from '../../../../client/i18n';
import SummaryPage      from '../../../../client/presentations/cdl/summary-page.jsx';

describe('CDL Summary page', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = {
      cdl: {
        cardAction: '',
        certification: '',
        basics: {
          legalName: {
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: ''
          },
          dateOfBirth: {
            month: '',
            day: '',
            year: ''
          },
          socialSecurity: {
            hasSocialSecurity: 'Yes',
            part1: '123',
            part2: '45',
            part3: '6789'
          },
          residency: {
            home: {
              street_1: '',
              street_2: '',
              zip: '',
              city: '',
              state: ''
            },
            sameAddressAsMailing: '',
            mailing: {
              street_1: '',
              street_2: '',
              zip: '',
              city: '',
              state: ''
            }
          }
        },
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
      },
      server: '',
      onSubmit: spy(),
      ui: {
        locale: 'en'
      }
    };
  });
  it('has 5 accordions', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.find('#cdl-summary-accordion').length);
    assert.ok(component.find('#basics-summary-accordion').length);
    assert.ok(component.find('#history-summary-accordion').length);
    assert.ok(component.find('#organ-donation-summary-accordion').length);
    assert.ok(component.find('#voter-registration-summary-accordion').length);
  });

  it('has a submit button', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.find('.navigation-buttons .submit').length, 'submit button missing');
  });

  it('has a header', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.text().includes('Please take a minute to review your answers.'));
  });

  it('shows user answer to certification type', function() {
    props.cdl.certification = 'inter';
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.text().includes('Type of driving:Interstate'));
  });
});
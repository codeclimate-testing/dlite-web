'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import store                    from '../../support/page-store';
import {
  CardDate,
  CardNumber,
  CurrentCardInfo
} from '../../../../client/presentations/conclusion/summary/current-card-info.jsx';

describe('Current Card Info shared components', function() {
  let props;
  const Wrapper = wrapperGenerator(store);
  beforeEach(function() {
    props = {
      currentCardInfo: {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      number: '',
      title: '',
      showIf: true,
      locale: 'en',
      editKey: 'currentCardInfo'
    }
  });

  describe('#CardNumber', function() {
    it('includes the title passed in props', function() {
      props.title = 'Driver License Number';
      props.cardNumber = '1111'
      let component = render(
        <Wrapper>
          <CardNumber { ...props } />
        </Wrapper>
      );
      assert.equal(component.text().includes('Driver License Number'), true);
    });
    it('includes the number passed in props', function() {
      props.cardNumber = '111111';
      props.title = 'Driver License Number';
      let component = render(
        <Wrapper>
          <CardNumber { ...props } />
        </Wrapper>
      );
      assert.equal(component.text().includes('111111'), true);
    });
  });

  describe('#CardDate', function() {
    it('returns null if showIf is false', function() {
      props.showIf = false;
      let component = render(
        <CardDate { ...props } />
      );
      assert.equal(component.text(), '');
    });
    it('prints the date passed in props', function() {
      props.cardInfo = {
        day: '10',
        month: '10',
        year: '2000'
      };
      props.showIf = true;
      let component = render(
        <CardDate { ...props } />
      );
      assert.equal(component.text().includes('10/10/2000'), true);
    });

  });

  describe('#CurrentCardInfo', function() {
    it('returns null if currentCardInfo is blank', function() {
        let component = render(
          <Wrapper>
            <CurrentCardInfo {...props} />
          </Wrapper>
        )
      assert.ok(!component.text().includes('None'));
    });

    it('does not show the date if the date is blank', function() {
      let component = render(
        <Wrapper>
          <CurrentCardInfo {...props} />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Expiration date'));
    });
    it('returns "None" if number is blank', function() {
      props.title = 'Number '
      props.currentCardInfo.year = '1999';
      let component = render(
        <Wrapper>
          <CurrentCardInfo {...props} />
        </Wrapper>
      );

      assert.ok(component.text().includes('Number None'));
    });

  });
});
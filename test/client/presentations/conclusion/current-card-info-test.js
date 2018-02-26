'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import {
  CardDate,
  CardNumber
} from '../../../../client/presentations/conclusion/summary/current-card-info.jsx';

describe('Current Card Info shared components', function() {
  let props;

  beforeEach(function() {
    props = {
      currentCardInfo: {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      number: '',
      title: ''
    }
  });

  describe('#CardNumber', function() {
    it('returns null if number is blank', function() {
      let component = render(
        <CardNumber {...props} />
      );
      assert.equal(component.text(), '');
    });
    it('includes the title passed in props', function() {
      props.title = 'Driver License Number';
      props.number = '1111'
      let component = render(
        <CardNumber { ...props } />
      );
      assert.equal(component.text().includes('Driver License Number'), true);
    });
    it('includes the number passed in props', function() {
      props.number = '111111';
      let component = render(
        <CardNumber { ...props } />
      );
      assert.equal(component.text().includes('111111'), true);
    });
  });

  describe('#CardDate', function() {
    it('returns null if date is blank', function() {
      let component = render(
        <CardDate { ...props } />
      );
      assert.equal(component.text(), '');
    });
    it('prints the date passed in props', function() {
      props.currentCardInfo = {
        day: '10',
        month: '10',
        year: '2000'
      };
      let component = render(
        <CardDate { ...props } />
      );
      assert.equal(component.text().includes('10/10/2000'), true);
    });

  });
});
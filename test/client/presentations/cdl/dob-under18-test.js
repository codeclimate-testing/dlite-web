'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import CDLUnder18               from '../../../../client/presentations/cdl/dob-under18.jsx';

describe('DateofBirthPage', function() {
  let props;

  beforeEach(function() {
    let dateOfBirth = {
      month: '01',
      day: '01',
      year: (new Date().getFullYear() - 17).toString()
    };

    let addApp = 'cdl';

    props = {
      dateOfBirth,
      addApp
    };
  });

  it('renders if user is on cdl application and is under 18', function() {
    let component = render(
      <CDLUnder18  {...props} />
    );
    assert.ok(component.find('.cdl-under-18'));
  });

  it('does not render if user is over 18', function() {
    props.dateOfBirth = {
      month: '06',
      day: '05',
      year: '1981'
    };
    let component = render(
      <CDLUnder18  {...props} />
    );
    assert.equal(component.find('.cdl-under-18').length, 0);
  });

  it('does not render if user is not on cdl application', function() {
    props.addApp = 'iddl';
    let component = render(

      <CDLUnder18  {...props} />

    );
    assert.equal(component.find('.cdl-under-18').length, 0);
  });
});


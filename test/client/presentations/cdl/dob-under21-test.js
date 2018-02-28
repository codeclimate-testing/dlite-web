'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import CDLUnder21               from '../../../../client/presentations/cdl/dob-under21.jsx';

describe('OrganDonationPage', function() {
  let props;

  beforeEach(function() {
    let dateOfBirth = {
      month: '01',
      day: '01',
      year: (new Date().getFullYear() - 19).toString()
    };

    let addApp = 'cdl';

    let locale = 'en';

    props = {
      dateOfBirth,
      addApp,
      locale
    };
  });

  it('renders if user is on cdl application and is under 21', function() {
    let component = render(
      <CDLUnder21  {...props} />
    );
    assert.ok(component.find('.cdl-under-21'));
  });

  it('does not render if user is over 21', function() {
    props.dateOfBirth = {
      month: '06',
      day: '05',
      year: '1981'
    };
    let component = render(
      <CDLUnder21  {...props} />
    );
    assert.equal(component.find('.cdl-under-21').length, 0);
  });

  it('does not render if user is not on cdl application', function() {
    props.addApp = 'iddl';
    let component = render(

      <CDLUnder21  {...props} />

    );
    assert.equal(component.find('.cdl-under-21').length, 0);
  });
});


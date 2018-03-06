'use strict';

import assert       from 'assert';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';
import Endorsements from '../../../../client/presentations/cdl/cdl-endorsements-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import store        from '../../support/page-store';

describe('LicenseType Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cdlEndorsements = {
        type: [],
        needEndorsement: ''
      };
      let onChange = spy();
      let cardClass = 'classC';

      let validations = {
        cdlEndorsements: spy(),
        endorsementType: spy(),
        needEndorsement: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let locale = 'en';
      props = {
        onChange,
        validations,
        cdlEndorsements,
        cardClass,
        locale
      }
    });

    it('shows a form with asking if you need endorsements on CDL', function() {
      let component = render(
        <Wrapper>
          <Endorsements {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.endorsement-toggle').length, 'form not rendered');
    });

    it('shows selectors for the various endorsement selections', function() {
      props.cdlEndorsements.needEndorsement = 'Yes';

      let component = render(
        <Wrapper>
          <Endorsements {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('label[for="tank"]').length, 'tank selector missing');
      assert.ok(component.find('label[for="passengerVehicle"]').length, 'passenger vehicle selector missing');
      assert.ok(component.find('label[for="schoolBus"]').length, 'school bus selector missing');
      assert.ok(component.find('label[for="hazmat"]').length, 'hazmat selector missing');
      assert.ok(component.find('label[for="tankHazmat"]').length, 'tank hazmat selector missing');
      assert.ok(component.find('label[for="firefighter"]').length, 'firefighter selector missing');
    });
  });
});


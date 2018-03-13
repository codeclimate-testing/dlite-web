'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import translations     from '../../../../../client/i18n';
import VoterRegistration from '../../../../../client/presentations/cdl/summary/voter-registration.jsx';

describe('CDL Summary voting registration section', function() {
  const Wrapper = wrapperGenerator(store);
  let props, component;

  beforeEach(function() {
    props = {
      ui: {
        locale: 'en'
      },
      cdl: {
        basics: {
          dateOfBirth: '',
          language: {
            ballotLanguage: ''
          }
        },
        voting: {
          citizenStatus: 'Yes',
          eligibilityRequirements: 'Yes',
          optOut: '',
          politicalPartyChoose: {
            isSelected: '',
            otherParty: '',
            politicalPartyChoose: ''
          }
        }
      }
    };
  });

  describe('#citizen status', function() {
    it('shows decline to answer if no selection made', function() {
      props.cdl.voting.citizenStatus = '';
      component = render(
        <Wrapper>
          <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('US CitizenDecline to answer'))
    });

    it('shows yes if user is a citizen', function() {
      component = render(
        <Wrapper>
          <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('US CitizenYes'));
    });
  });

  describe('#voting eligibility', function() {
    it('shows decline to answer if no selection made', function() {
      props.cdl.voting.eligibilityRequirements = '';
      component = render(
        <Wrapper>
          <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Meets eligibility requirementsDecline to answer'))
    });

    it('shows yes if user is eligible', function() {
      component = render(
        <Wrapper>
          <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Meets eligibility requirementsYes'))
    });
  });

  describe('#opt out', function() {
    it('does not render if no selection made', function() {
      props.cdl.voting.citizenStatus = '';
      component = render(
        <Wrapper>
          <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Voter registration choice'))
    });

    it('shows choice if selection made and citizen and eligible', function() {
      props.cdl.voting.optOut = 'new'
      component = render(
        <Wrapper>
          <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Voter registration choiceWill be registered'));
    });
  });

  describe('#political party choose', function() {
    it('does not render if no selection made', function() {
      props.cdl.voting.eligibilityRequirements = '';
      component = render(
        <Wrapper>
        <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Political party'))
    });

    it('shows choice if selection made', function() {
      props.cdl.voting.politicalPartyChoose.isSelected = 'Yes';
      props.cdl.voting.politicalPartyChoose.politicalPartyChoose = 'Libertarian Party';
      component = render(
        <Wrapper>
        <VoterRegistration { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Political partyLibertarian Party'));
    });
  });
});

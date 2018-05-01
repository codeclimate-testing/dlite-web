'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import data             from '../../../../../server/models/parsers/client-default-state.js';

import Voting           from '../../../../../client/presentations/conclusion/summary/voting.jsx';
import {
  CitizenStatus,
  EligibilityRequirements,
  BallotByMail,
  PoliticalPartyChoose,
  BallotLanguage,
  ContactMethods,
  OptOut
} from '../../../../../client/presentations/conclusion/summary/voting/index';

const Wrapper = wrapperGenerator(store);

describe('Summary Voting section', function() {
  let props;
  beforeEach(function() {
    props = {
      application: Object.assign({}, data.IDDL.application),
      onSubmit: spy(),
      ui: { }
    };
  });

  describe('#Voting accordion', function() {
    it('shows a closed accordion with text "Voter registration"', function() {
      let component = render(
        <Wrapper>
          <Voting { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Voter registration'));
    });
  });
});

describe('Summary Voter registration section components', function() {
  let props;
  beforeEach(function() {
    props = Object.assign({}, data.IDDL.application);
    props.editKey = '';
  });

  describe('#CitizenStatus', function() {
    it('shows citizens status', function(){
       props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      let citizenStatus = 'Yes';
      props.editKey = 'citizenship'

      let component = render(
        <Wrapper>
          <CitizenStatus
            { ...props }
            citizenStatus={citizenStatus}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('US Citizen'), true);
      assert.equal(component.text().includes('Yes'), true);
    });
    it('shows decline to answer text when user has declined to answer', function() {
      let citizenStatus = 'decline';
       props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      props.editKey = 'citizenship'

      let component = render(
        <Wrapper>
          <CitizenStatus
            { ...props }
            citizenStatus={citizenStatus}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('US Citizen'), true);
      assert.equal(component.text().includes('Decline to answer'), true);
    });
     it('citizenship shows not available because youth cannot preregister', function() {
       let youthYear = new Date().getFullYear() - 14;
       let citizenStatus = 'Decline to answer';
       props.dateOfBirth = {
        month: '11',
        day: '11',
        year: youthYear
      };
      props.editKey = 'citizenship'

      let component = render(
        <Wrapper>
          <CitizenStatus
            { ...props }
            citizenStatus={citizenStatus}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('US Citizen'), true);
      assert.equal(component.text().includes('Not available'), true);
    });
  });

  describe('#EligibilityRequirements', function() {
    beforeEach(function() {
      props.editKey = 'votingEligibility';
    });
    it('eligibility shows not available because youth cannot preregister', function(){
      let eligibilityRequirements = 'Decline to answer';
      let youthYear = new Date().getFullYear() - 14;
       props.dateOfBirth = {
        month: '11',
        day: '11',
        year: youthYear
      };

      let component = render(
        <Wrapper>
          <EligibilityRequirements
            { ...props }
            eligibilityRequirements={eligibilityRequirements}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Meets eligibility requirements'), true);
      assert.equal(component.text().includes('Not available'), true);
    });
     it('shows eligibility', function(){
      let eligibilityRequirements = 'Yes';
       props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };

      let component = render(
        <Wrapper>
          <EligibilityRequirements
            { ...props }
            eligibilityRequirements={eligibilityRequirements}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Meets eligibility requirements'), true);
      assert.equal(component.text().includes('Yes'), true);
    });
  });

  describe('#OptOut', function() {
    beforeEach(function() {
      props.editKey = 'votingOptOut';
    });
    it('shows opt out', function(){
      props.citizenStatus = 'Yes';
      props.eligibilityRequirements = 'Yes';
      props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      let optOut = 'new';

      let component = render(
        <Wrapper>
          <OptOut
            { ...props }
            optOut={optOut}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Voter registration choice'), true);
      assert.equal(component.text().includes('Will be registered'), true);
    });
  });

  describe('#PoliticalPartyChoose', function() {
    beforeEach(function() {
      props.editKey = 'choosePoliticalParty';
    });
    it('shows political party selections', function(){
        props.citizenStatus = 'Yes';
        props.eligibilityRequirements = 'Yes';
        props.dateOfBirth = {
          month: '11',
          day: '11',
          year: '1999'
        };
      let politicalPartyChoose = {
        isSelected: 'Yes',
        politicalPartyChoose: 'Green Party'
      };

      let component = render(
        <Wrapper>
          <PoliticalPartyChoose
            { ...props }
            politicalPartyChoose={politicalPartyChoose}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Political party'), true);
      assert.equal(component.text().includes('Green Party'), true);
    });

    it('shows No Answer after user has switched answer', function() {
        props.citizenStatus = 'Yes';
        props.eligibilityRequirements = 'Yes';
        props.dateOfBirth = {
          month: '11',
          day: '11',
          year: '1999'
        };
      let politicalPartyChoose = {
        isSelected: 'Skip',
        politicalPartyChoose: 'Green Party'
      };

      let component = render(
        <Wrapper>
          <PoliticalPartyChoose
            { ...props }
            politicalPartyChoose={politicalPartyChoose}
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('Political party'), true);
      assert.equal(component.text().includes('Not provided'), true);
    });

    it('shows the other party typed into the form', function() {
      props.citizenStatus = 'Yes';
      props.eligibilityRequirements = 'Yes';
      props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      let politicalPartyChoose = {
        isSelected: 'Yes',
        politicalPartyChoose: 'Other',
        otherParty: 'the French Canadians'
      };

      let component = render(
        <Wrapper>
          <PoliticalPartyChoose
            { ...props }
            politicalPartyChoose={politicalPartyChoose}
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('Political party'), true);
      assert.equal(component.text().includes('the French Canadians'), true);
    });
  });

  describe('#BallotLanguage', function() {
    beforeEach(function() {
      props.editKey = 'chooseBallotLanguage';
    });

    it('shows ballot language selection', function(){
      props.citizenStatus = 'Yes';
      props.eligibilityRequirements = 'Yes';
      props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      let ballotLanguage = 'ko';

      let component = render(
        <Wrapper>
          <BallotLanguage
            { ...props }
            ballotLanguage={ballotLanguage}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Ballot language'), true);
      assert.equal(component.text().includes('Korean'), true);
    });
  });

  describe('#BallotByMail', function() {
    it('shows ballot by mail selection', function(){
      props.citizenStatus = 'Yes';
      props.eligibilityRequirements = 'Yes';
      props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      props.editKey = 'ballotByMail';
      let ballotByMail = 'Yes';

      let component = render(
        <Wrapper>
          <BallotByMail
            { ...props }
            ballotByMail={ballotByMail}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Vote by mail'), true);
      assert.equal(component.text().includes('Yes'), true);
    });
  });

  describe('#ContactMethods', function() {
    it('shows contact methods selections', function () {
      props.citizenStatus = 'Yes';
      props.eligibilityRequirements = 'Yes';
      props.dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      props.editKey = 'contactMethods';
      let contactMethods = {
        shouldContact: 'Yes',
        emailAddress: 'email@email.com',
        phoneNumber1: '111',
        phoneNumber2: '111',
        phoneNumber3: '1111'
      };

      let component = render(
        <Wrapper>
          <ContactMethods
            { ...props }
            contactMethods={contactMethods}
          />
        </Wrapper>
      )

      assert.equal(component.text().includes('Should Contact'), true);
      assert.equal(component.text().includes('Yes'), true);
      assert.equal(component.text().includes('Email'), true);
      assert.equal(component.text().includes('email@email.com'), true);
      assert.equal(component.text().includes('Phone'), true);
      assert.equal(component.text().includes('(111) 111-1111'), true);
    });
  });
});

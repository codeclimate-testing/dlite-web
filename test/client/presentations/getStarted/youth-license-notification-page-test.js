'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import sinon                    from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import store                    from '../../support/page-store';
import YouthDLNotificationPage  from '../../../../client/presentations/get-started/youth-license-notification-page.jsx';

describe('YouthDLNotificationPage', function() {
  const Wrapper = wrapperGenerator(store);

  let props;

  beforeEach(function() {
    let cardType = { youthIDInstead: "" };
    let onChange = sinon.spy();
    let validations = {
      youthIDInstead: sinon.spy()
    };
    let dateOfBirth = {
        year: '',
        month: '',
        day: ''
    };
    props = {
      cardType,
      onChange,
      dateOfBirth,
      validations
    }
  });


  it('should render the right intro header if the license seeker is under 15', function() {
    let today = new Date();

    props.cardType = {
      IDDL: ['DL'],
      cardAction: 'new',
      youthIDInstead: 'Yes'
    }

    props.dateOfBirth = {
      year: (today.getFullYear() - 10).toString(),
      month: (today.getMonth() + 1).toString(),
      day: today.getDate().toString()
    }
    props.onChange = sinon.spy();

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props}/>
      </Wrapper>
    );

    assert.ok(component.text().includes('You must be 15 years old'), 'Header not set for youth under 15');
  });

  it('should render the right intro header if the license seeker is between 15.5 and 16', function() {
    let today = new Date();

    props.cardType = {
      IDDL: ['DL'],
      cardAction: 'new',
      youthIDInstead: 'Yes'
    }
    props.dateOfBirth = {
      year: (today.getFullYear() - 15).toString(),
      month: (today.getMonth() + 1 - 7).toString(),
      day: today.getDate().toString()
    }
    props.onChange = sinon.spy();

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props}/>
      </Wrapper>
    );

    assert.ok(component.text().includes('You must be 15.5 years old to get a learners permit.'), 'Header not set for youth under 15.5 +');
  });

  it('should render an error message if you are under age and insist on a DL', function() {
    let today = new Date();

    props.cardType = {
      IDDL: ['DL'],
      cardAction: 'new',
      youthIDInstead: 'No'
    }
    props.dateOfBirth = {
      year: (today.getFullYear() - 10).toString(),
      month: (today.getMonth() + 1).toString(),
      day: today.getDate().toString()
    }

    props.onChange = sinon.spy();

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props}/>
      </Wrapper>
    );

    assert(
      component.text().includes('Ok, please come back when you turn 15'),
      'Error message not rendered'
    );
  });

  it('should not render an error message if consent to only getting an id', function() {
    let today = new Date();

      props.cardType = {
        IDDL: ['DL'],
        cardAction: 'new',  
        youthIDInstead: 'Yes'
      }

      props.dateOfBirth =  {
        year: (today.getFullYear() - 10).toString(),
        month: (today.getMonth() + 1).toString(),
        day: today.getDate().toString()
      }

      props.onChange = sinon.spy();

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props}/>
      </Wrapper>
    );

    assert(
      !component.text().includes('Ok, please come back when you turn 15'),
      'Error message rendered'
    );
  });

it('shows the form allowing you to choose to get a youth ID', function() {
    let today = new Date();

    props.cardType = {
        IDDL: ['DL'],
        cardAction: 'new',
        youthIDInstead: 'Yes'
      }
      props.dateOfBirth = {
        year: (today.getFullYear() - 10).toString(),
        month: (today.getMonth() + 1).toString(),
        day: today.getDate().toString()
      }
      props.onChange= sinon.spy();

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props} />
      </Wrapper>
    );
    assert.ok(component.find('label[for="youthIDInstead-No"]').length, 'No button missing');
    assert.ok(component.find('label[for="youthIDInstead-Yes"]').length, 'Yes button missing');
  });
});


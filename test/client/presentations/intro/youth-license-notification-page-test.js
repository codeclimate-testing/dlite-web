'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import sinon                    from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import YouthDLNotificationPage  from '../../../../client/presentations/intro/youth-license-notification-page.jsx';

describe('YouthDLNotificationPage', function() {
  let store = {
    ui: {}
  };
  const Wrapper = wrapperGenerator(store);

  it('should render the right intro header if the license seeker is under 15', function() {
    let today = new Date();

    let props = {
      cardType: {
        ID: false,
        DL: true
      },
      dateOfBirth: {
        year: (today.getFullYear() - 10).toString(),
        month: (today.getMonth() + 1).toString(),
        day: today.getDate().toString()
      },
      onChange: sinon.spy()
    };

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props}/>
      </Wrapper>
    );

    assert.ok(component.text().includes('You must be 15 years old'), 'Header not set for youth under 15');
  });

  it('should render the right intro header if the license seeker is between 15.5 and 16', function() {
    let today = new Date();

    let props = {
      cardType: {
        ID: false,
        DL: true
      },
      dateOfBirth: {
        year: (today.getFullYear() - 15).toString(),
        month: (today.getMonth() + 1 - 7).toString(),
        day: today.getDate().toString()
      },
      onChange: sinon.spy()
    };

    let component = render(
      <Wrapper>
        <YouthDLNotificationPage {...props}/>
      </Wrapper>
    );

    assert.ok(component.text().includes('You must be 15.5 years old to get a learners permit.'), 'Header not set for youth under 15.5 +');
  });

  it('should render an error message if you are under age and insist on a DL', function() {
    let today = new Date();

    let props = {
      cardType: {
        ID: false,
        DL: true,
        youthIDInstead: 'No'
      },
      dateOfBirth: {
        year: (today.getFullYear() - 10).toString(),
        month: (today.getMonth() + 1).toString(),
        day: today.getDate().toString()
      },
      onChange: sinon.spy()
    };

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

    let props = {
      cardType: {
        ID: false,
        DL: true,
        youthIDInstead: 'Yes'
      },
      dateOfBirth: {
        year: (today.getFullYear() - 10).toString(),
        month: (today.getMonth() + 1).toString(),
        day: today.getDate().toString()
      },
      onChange: sinon.spy()
    };

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
});

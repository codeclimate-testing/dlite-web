'use strict';

import assert       from 'assert';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';

import RealIdPage   from '../../../../client/presentations/getStarted/real-id-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import pageStore    from '../../support/page-store';

describe('RealIdPage', function() {
  let store = Object.assign({}, pageStore);
  store.ui.accordions = [];
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        new: ['ID', 'DL'],
        renew: '',
        youthIDInstead: ''
      }
      let realID = {
        realIdDesignation: '',
        getRealID: ''
      };
      let validations = {
        designation: spy(),
        realID: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      let accordions = {};
      let onChange = spy();

      props = {
        cardType,
        realID,
        validations,
        accordions,
        onChange
      }
    });

    it('shows both FAQ drawers', function() {
      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert.equal(component.find('.accordion').length, 2, 'wrong number of faq drawers');
    });

    it('shows the form allowing you to choose a real id', function() {
      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('#getRealID-Yes').length, 'Yes button missing');
      assert.ok(component.find('#getRealID-No').length, 'No button missing');
    });

    it('does not show the form asking which card if no selection is made', function() {
      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignation-ID').length, 'form asking to choose between ID and DL showing');
    });

    it('shows the form asking which card if you select yes to real id', function() {
      props.realID.getRealID = 'Yes';

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(component.find('#realIdDesignation-ID').length, 'form asking to choose between ID and DL not showing');
    });

    it('does not shows the form asking which card if you select yes to real id', function() {
      props.realID.getRealID = 'No';

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignation-ID').length, 'form asking to choose between ID and DL not showing');
    });

    it('does not show the form asking which type if you only are getting one card', function() {
      props.realID.getRealID = 'Yes';
      props.cardType.new = ['DL'];

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignation-ID').length, 'form asking to choose between ID and DL not showing');
    });

    it('should have a header indicating your particular card type', function() {
      props.cardType.new = ['ID']
      let component = render(
        <Wrapper>
          <RealIdPage  {...props}/>
        </Wrapper>
      );
  
      assert.ok(
        component.text().includes('Do you plan on using your ID to fly?'),
        'Header does not include ID type'
      );
  
      props.cardType.new = ['DL'];
  
      component = render(
        <Wrapper>
          <RealIdPage  {...props}/>
        </Wrapper>
      );
  
      assert.ok(
        component.text().includes('Do you plan on using your Driver License to fly?'),
        'Header does not include DL type'
      );
    });

    it('should have a header indicating you are applying for both cards is applicable', function() {
      props.cardType.new = ['DL', 'ID'];
  
      let component = render(
        <Wrapper>
          <RealIdPage  {...props}/>
        </Wrapper>
      );
  
      assert.ok(
        component.text().includes('Do you plan on using one of your cards to fly?'),
        'Header does not for multicard'
      );
    });
  });
});


'use strict';

import assert       from 'assert';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';

import RealIdPage   from '../../../../client/presentations/get-started/real-id-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import pageStore    from '../../support/page-store';

describe('RealIdPage', function() {
  let store = Object.assign({}, pageStore);
  store.ui.accordions = [];
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
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
        cardType: ['ID', 'DL'],
        cardAction: 'new',
        youthIDInstead: '',
        IDApp: {
          isApplying: false
        },
        DLApp: {
          isApplying: false
        },
        realID: realID,
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

      assert.ok(component.find('#getRealID-both-Yes').length, 'Yes button missing');
      assert.ok(component.find('#getRealID-both-No').length, 'No button missing');
    });

    it('updates the radio button names with ID when user is just on ID flow', function() {
      props.cardType = ['ID'];

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('#getRealID-ID-Yes').length, 'Yes button missing');
      assert.ok(component.find('#getRealID-ID-No').length, 'No button missing');
    });

    it('updates the radio button names with DL when user is just on ID flow', function() {
      props.cardType = ['DL'];

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('#getRealID-DL-Yes').length, 'Yes button missing');
      assert.ok(component.find('#getRealID-DL-No').length, 'No button missing');
    });

    it('does not show the form asking which card if no selection is made', function() {
      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignation-ID').length, 'form asking to choose between ID and DL showing');
    });

    it('shows the form asking which card if you select yes to real id and are getting both cards', function() {
      props.realID.getRealID = 'Yes';
      props.IDApp.isApplying = true;
      props.DLApp.isApplying = true;
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
      props.cardType = ['ID'];
      props.IDApp.isApplying = true;

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignation-ID').length, 'form asking to choose between ID and DL not showing');
    });

    it('should have a header indicating your particular card type', function() {
      props.cardType = ['ID'];
      props.IDApp.isApplying = true;
      let component = render(
        <Wrapper>
          <RealIdPage  {...props}/>
        </Wrapper>
      );

      assert.ok(
        component.text().includes('Do you plan on using your ID to fly?'),
        'Header does not include ID type'
      );

      props.cardType = ['DL'];
      props.IDApp.isApplying = false;
      props.DLApp.isApplying = true;

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
      props.cardType.IDDL = ['DL', 'ID'];

      let component = render(
        <Wrapper>
          <RealIdPage  {...props}/>
        </Wrapper>
      );

      assert.ok(
        component.text().includes('Do you plan on using your card to fly?'),
        'Header does not for multicard'
      );
    });
  });
});


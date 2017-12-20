'use strict';

import assert from 'assert';
import 'jsdom-global/register';
import configure from '../../support/configure-enzyme';
import { render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import RealIdPage from '../../../../client/presentations/intro/real-id-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import pageStore from '../../support/page-store';

describe('RealIdPage', function() {
  let store = Object.assign({}, pageStore);
  store.ui.accordions = [];
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cardType = {
        ID: true,
        DL: true
      }
      let realID = {
        realIdDesignation: '',
        getRealID: ''
      };

      let accordions = {};
      let section = {};

      let onChange = sinon.spy();

      props = {
        cardType,
        realID,
        accordions,
        onChange,
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

      assert.ok(component.find('#getRealIDYes').length, 'Yes button missing');
      assert.ok(component.find('#getRealIDNo').length, 'No button missing');
    });

    it('does not show the form asking which card if no selection is made', function() {
      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignationID').length, 'form asking to choose between ID and DL showing');
      assert(!component.find('#realIdDesignationDL').length, 'form asking to choose between ID and DL showing');
    });

    it('shows the form asking which card if you select yes to real id', function() {
      props.realID.getRealID = 'Yes';

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(component.find('#realIdDesignationID').length, 'form asking to choose between ID and DL not showing');
      assert(component.find('#realIdDesignationDL').length, 'form asking to choose between ID and DL not showing');
    });

    it('does not shows the form asking which card if you select yes to real id', function() {
      props.realID.getRealID = 'No';

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignationID').length, 'form asking to choose between ID and DL not showing');
      assert(!component.find('#realIdDesignationDL').length, 'form asking to choose between ID and DL not showing');
    });

    it('does not show the form asking which type if you only are getting one card', function() {
      props.realID.getRealID = 'Yes';
      props.cardType.ID = false;

      let component = render(
        <Wrapper>
          <RealIdPage {...props}/>
        </Wrapper>
      );

      assert(!component.find('#realIdDesignationID').length, 'form asking to choose between ID and DL not showing');
      assert(!component.find('#realIdDesignationDL').length, 'form asking to choose between ID and DL not showing');
    });
  });
});


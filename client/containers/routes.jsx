'use strict';

import React from 'react';
import { Route } from 'react-router-dom';

import Home         from '../presentations/home.jsx';
import Summary      from './summary-handler.jsx';
import LegalName    from './legal-name-form-container.jsx';
import DateOfBirth  from './date-of-birth-form-container.jsx';
import Addresses    from '../presentations/addresses.jsx';
import Sex          from './sex-selector-form-container.jsx';
import HairColor    from './hair-color-form-container.jsx';
import Contact      from './contact-details-form-container.jsx';
import EyeColor     from './eye-color-form-container.jsx';

import alicePath from '../helpers/alice-path';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/about-me/names') } component={LegalName} />
        <Route path={ alicePath('/about-me/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/about-me/addresses') } component={Addresses} />
        <Route path={ alicePath('/about-me/sex') } component={Sex} />
        <Route path={ alicePath('/about-me/appearance/hair' ) } component={HairColor} />
        <Route path={ alicePath('/about-me/contact') } component={Contact} />
        <Route path={ alicePath('/about-me/appearance/eye') } component={EyeColor} />
      </div>
    );
  }
}

export default Router;

'use strict';

import React from 'react';
import FormPresentation from "../presentations/home.jsx";

const PAGE_TITLE = {
  '/services/about-me/legal-name':        'About me: Legal name',
  '/services/summary':                    'Summary of my application',
  '/services/about-me/date-of-birth':     'About me: Date of birth',
  '/services/about-me/home-address':      'About me: Home address',
  '/services/about-me/mailing-address':   'About me: Mailing address',
  '/services/about-me/sex':               'About me: Sex identification',
  '/services/about-me/appearance/eye':    'About me: Eye color',
  '/services/about-me/appearance/hair':   'About me: Hair color',
  '/services/about-me/height':            'About me: Height',
  '/services/about-me/weight':            'About me: Weight',
  '/services/about-me/social-security':   'About me: Social security'
}

const Form = (props) => {

  props.history.listen((location) => {
    //Default title - TBD
    document.title = (PAGE_TITLE[location.pathname] ? PAGE_TITLE[location.pathname] : 'DMV - Online ID and License Application');
  });

  return (
    <FormPresentation />
  );
};

export default Form;
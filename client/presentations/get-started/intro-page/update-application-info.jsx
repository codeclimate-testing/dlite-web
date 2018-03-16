'use strict';

import React                  from 'react';
import { hasActionIsUpdating }     from '../../../helpers/data/card-actions';
import translations           from '../../../i18n';
import Translation            from '../../../i18n/translate-tag.jsx';
import {
  getID,
  getDL
 }   from '../../../helpers/data/card-type';

const License = (props) => {
  if (!getDL(props)) { return null;}
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.explanation.update.license}
         </Translation>
};

const ID = (props) => {
  if (!getID(props)) { return null; }
  let locale = props.locale;
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.explanation.update.id}
         </Translation>
};


const UpdateApplicationInfo = (props) => {
  if (!hasActionIsUpdating(props)) { return null; }
  let locale = props.locale;
  return (
    <div className='update-application-info'>
      <License  cardType = {props.cardType}   locale={locale}/>
      <ID       cardType = {props.cardType }  locale={locale}/>
    </div>
    );
};

export default UpdateApplicationInfo;

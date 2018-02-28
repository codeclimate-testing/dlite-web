'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { hasActionIsUpdating }     from '../../../helpers/data/card-actions';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import {
  getID,
  getDL
 }   from '../../../helpers/data/card-type';

const License = (props) => {
  if (!getDL(props)) { return null;}
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.explanation.update.license);
};

const ID = (props) => {
  if (!getID(props)) { return null; }
  let locale = props.locale;
  return convertToHtml('p', translations[locale].intro.getStartedPage.explanation.update.id);
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

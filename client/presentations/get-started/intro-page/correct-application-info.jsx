'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { hasActionIsCorrecting }     from '../../../helpers/data/card-actions';
import {
  getID,
  getDL
 }   from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const License = (props) => {
  let locale = props.locale;
  if (!getDL(props)) { return null;}
  return convertToHtml('p', translations[locale].intro.getStartedPage.explanation.correct.license);
};

const ID = (props) => {
  let locale = props.locale;
  if (!getID(props)) { return null; }
  return convertToHtml('p', translations[locale].intro.getStartedPage.explanation.correct.id);
};

const CorrectApplicationInfo = (props) => {
  if( !hasActionIsCorrecting(props)) { return null; }
  let locale = props.locale;
  return (
    <div className='correct-application-info'>
      <License  cardType = {props.cardType}   locale  = {locale} />
      <ID       cardType = {props.cardType }  locale  = {locale} />
    </div>
    );
};

export default CorrectApplicationInfo;


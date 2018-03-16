'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { hasActionIsCorrecting }     from '../../../helpers/data/card-actions';
import {
  getID,
  getDL
 }   from '../../../helpers/data/card-type';
import Translation        from '../../../i18n/translate-tag.jsx';

const License = (props) => {
  let locale = props.locale;
  if (!getDL(props)) { return null;}
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.explanation.correct.license}
         </Translation>
};

const ID = (props) => {
  let locale = props.locale;
  if (!getID(props)) { return null; }
  return <Translation tag='p'>
            {translations[locale].intro.getStartedPage.explanation.correct.id}
         </Translation>
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


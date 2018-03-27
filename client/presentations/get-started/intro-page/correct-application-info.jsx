'use strict';

import React                          from 'react';
import { hasActionIsCorrecting }      from '../../../helpers/data/card-actions';
import {
  getID,
  getDL
 }   from '../../../helpers/data/card-type';
import Translator                     from '../../../i18n/translator-tag.jsx';

const License = (props) => {
  if (!getDL(props)) { return null;}
  return <Translator tag='p' translationPath = 'intro.getStartedPage.explanation.correct.license' />
};

const ID = (props) => {
  if (!getID(props)) { return null; }
  return <Translator tag='p' translationPath = 'intro.getStartedPage.explanation.correct.id' />
};

const CorrectApplicationInfo = (props) => {
  if( !hasActionIsCorrecting(props)) { return null; }
  return (
    <div className='correct-application-info'>
      <License  cardType = {props.cardType}  />
      <ID       cardType = {props.cardType } />
    </div>
    );
};

export default CorrectApplicationInfo;


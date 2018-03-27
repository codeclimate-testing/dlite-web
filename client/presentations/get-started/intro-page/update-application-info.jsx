'use strict';

import React                       from 'react';
import { hasActionIsUpdating }     from '../../../helpers/data/card-actions';
import Translator                  from '../../../i18n/translator-tag.jsx';
import { getID, getDL }            from '../../../helpers/data/card-type';

const License = (props) => {
  if (!getDL(props)) { return null;}
  return <Translator tag='p' translationPath = 'intro.getStartedPage.explanation.update.license' />
};

const ID = (props) => {
  if (!getID(props)) { return null; }
  return  <Translator tag='p' translationPath = 'intro.getStartedPage.explanation.update.id' />
};


const UpdateApplicationInfo = (props) => {
  if (!hasActionIsUpdating(props)) { return null; }
  return (
    <div className='update-application-info'>
      <License  cardType = {props.cardType}  />
      <ID       cardType = {props.cardType } />
    </div>
    );
};

export default UpdateApplicationInfo;

'use strict';

import React              from 'react';
import { pathForPage }    from '../helpers/navigation/page';
import Translator         from '../i18n/translator-tag.jsx';
import {
  addOrEdit,
  addOrEditIcon
 }      from '../helpers/data/application';

const LinkPresentation = (props) => {

  let iconType = addOrEditIcon(props);
  let className = `${props.editKey} summary edit button ${props.cardType} ${props.appID} ${props.linkType}`;
  let id = `${props.linkType} ${props.appID} ${props.nextAddress}`;

  let addText = <Translator tag = 'span' translationPath = 'newExtracted.conclusion.summary.buttons.add' />;
  let editText = <Translator tag = 'span' translationPath = 'summaryPage.buttons.edit' />;
  let buttonText = addOrEdit(props, addText, editText);

  return (
    <div className='summary-section'>
      <div className='row'>
        <div className='unit-right' onClick={props.onClick}>
          <div className='shadow-container'>
            <a
              className       = { className}
              id              = { id }
              aria-labelledby = { `${iconType}-${props.appID}`}
            >
              <div className = {`unit ${iconType}-icon`}></div>
              <div
                className='unit text-area'
                id = {`${iconType}-${props.appID}`}
              >{buttonText}</div>
            </a>
          </div>
        </div>
        <div className='last-unit summary-content'>
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default LinkPresentation;

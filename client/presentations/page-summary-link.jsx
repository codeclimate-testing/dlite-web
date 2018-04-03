'use strict';

import React              from 'react';
import { Link }           from 'react-router-dom';
import { pathForPage }    from '../helpers/navigation/page';
import Translator         from '../i18n/translator-tag.jsx';
import {
  addOrEdit,
  addOrEditIcon
 }      from '../helpers/data/pathnames';

const LinkPresentation = (props) => {
  let iconType = addOrEditIcon(props, 'add', 'edit');
  let className = `${props.editKey} summary edit button ${props.cardType}`;

  let addText = <Translator tag = 'span' translationPath = 'newExtracted.conclusion.summary.buttons.add' />;
  let editText = <Translator tag = 'span' translationPath = 'summaryPage.buttons.edit' />;
  let buttonText = addOrEdit(props, addText, editText);

  let linkTo = {
    pathname: pathForPage(props.editKey, {flow: props.flow})
  };

  let handleClick = (e) => {
    e.preventDefault();
    props.onFlowChange(props.flow, props.cardType, props.appID, props.history);
  };


  return (
    <div className='summary-section'>
      <div className='row'>
        <div className='unit-right' onClick={handleClick}>
          <div className='shadow-container'>
            <Link
              to={linkTo}
              className= {className}
            >
              <div className={`unit ${iconType}-icon`}></div>
              <div className='unit text-area'>{buttonText}</div>
            </Link>
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

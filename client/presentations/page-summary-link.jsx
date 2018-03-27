'use strict';

import React              from 'react';
import { Link }           from 'react-router-dom';
import { pathForPage }    from '../helpers/navigation/page';
import Translator         from '../i18n/translator-tag.jsx';
import { addOrEdit }      from '../helpers/data/pathnames';


const LinkPresentation = (props) => {
  let className = `${props.editKey} summary edit button ${props.cardType}`;

  let addText = 'Add';
  let editText = <Translator tag = 'span' translationPath = 'summaryPage.buttons.edit' />;

  let buttonText = addOrEdit(props, addText, editText);
  let flow = addOrEdit(props, 'add', 'edit');
  let flowChange = props.onFlowChange;
  let cardType  = props.cardType;

  let linkTo = {
    pathname: pathForPage(props.editKey, {flow: flow})
  };

  const handleClick = (props) => {
    return flowChange(flow, cardType);
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
              <div className='unit edit-icon'></div>
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

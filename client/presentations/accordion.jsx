'use strict';

import React      from 'react';
import Translator from '../i18n/translator-tag.jsx';

const Accordion = (props) => {
  const className = 'row accordion ' + props.accordionState || '';
  const id        = props.id + '-accordion'

  return (
    <div
      className={className}
      id={id}
      aria-controls = {props.id}
      aria-expanded = {props.accordionBol}
      role='button'
    >
      <a
        className='row accordion-header'
        onClick={props.onClick}
        accordion = {props.id}
        href='javascript:void(0);'
      >
        <div
          className='unit-right icon-region'
          accordion = {props.id}
        />
        <div
          className='last-unit'
          accordion = {props.id}
        >
        <Translator
          tag             = 'span'
          translationPath = { props.title }
          accordion       = { props.id }
        />
        </div>
      </a>
      <div
        id = {props.id}
        aria-hidden = {props.ariaHidden}
        aria-labelledby = {id}
        className='row accordion-body'
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;


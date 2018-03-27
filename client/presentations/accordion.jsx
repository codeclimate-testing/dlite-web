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
    >
      <a
        className='row accordion-header'
        onClick={props.onClick}
        id={props.id}
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
        />
        </div>
      </a>
      <div
        id = {props.id}
        aria-hidden = {props.ariaHidden}
        aria-labelledby = {props.id}
        className='row accordion-body'>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;


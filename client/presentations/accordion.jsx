'use strict';

import React from 'react';

const Accordion = (props) => {
  const className = 'row accordion ' + props.accordionState || '';
  const id        = props.id + '-accordion'

  return (
    <div
      className={className}
      id={id}
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
          {props.title}
        </div>
      </a>
      <div 
        className='row accordion-body'>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;

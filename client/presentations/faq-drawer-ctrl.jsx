'use strict';

import React from 'react';

const FAQDrawer = (props) => {

  return (
    <div className='faq-drawer'>
      <a onClick={ props.onToggleFAQ } href='#'>
        <h4 id={ props.drawerName } >{ props.title }</h4>
      </a>
      { props.faqDrawers[props.drawerName] && props.children }
    </div>
  )
}


export default FAQDrawer;
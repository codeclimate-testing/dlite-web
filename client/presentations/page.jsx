'use strict';

import React from 'react';

import HomeLink          from './home-link.jsx';
import SectionHeader     from './section-header.jsx';

const setTitle = (title) => {
  if (!title) { return; }
  document.title = title;
}

const Page = (props) => {
  setTitle(props.pageTitle);

  return (
    <div className='application-page row'>
      <HomeLink />
      <SectionHeader
        number={props.sectionNumber}
        name={props.sectionName}
      />

      {props.children}
    </div>
  );
};

export default Page;

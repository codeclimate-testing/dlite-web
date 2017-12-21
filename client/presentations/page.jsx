'use strict';

import React from 'react';

import HomeLink          from './home-link.jsx';
import SectionHeader     from './section-header.jsx';

const setTitleLiteral = (title, section) => {
  if (!title) { return; }
  document.title = title;
}

const setTitleFromState = (section) => {
  let name = section.name;
  let title = `DMV: ${section.applicationType} - ${section.name}`;
  document.title = title;
};

const setTitle = (literal, section) => {
  if (literal) {
    setTitleLiteral(literal);
  } else if (section) {
    setTitleFromState(section);
  }
}

const Page = (props) => {
  setTitle(props.pageTitle, props.section);

  let name = props.sectionName || (props.section && props.section.name);
  let number = props.sectionNumber || (props.section && props.section.number);

  return (
    <div className='application-page row'>
      <HomeLink />
      <SectionHeader
        number={number}
        name={name}
      />

      {props.children}
    </div>
  );
};

export default Page;

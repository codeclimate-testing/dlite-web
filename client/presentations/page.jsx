'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HomeLink           from './home-link.jsx';
import SectionHeader      from './section-header.jsx';

const setTitleLiteral = (title, section) => {
  if (!title) { return; }
  document.title = title;
}

const setTitleFromState = (section) => {
  let name = section.name;
  let title = `DMV ${section.applicationType} - ${section.name}`;
  document.title = title;
};

const setTitle = (literal, section) => {
  if (literal) {
    setTitleLiteral(literal);
  } else if (section) {
    setTitleFromState(section);
  }
}

const Header = (props) => {
  return ReactDOM.createPortal(
    <SectionHeader {...props}/>,
    document.getElementById('section-header')
  );
}

const ApplicationHeader = (props) => {
  return ReactDOM.createPortal(
    <div className='application-header'>
      {props.applicationType}
    </div>, document.getElementById('application-header')
  );
}

const Page = (props) => {
  setTitle(props.pageTitle, props.section);

  let name = props.sectionName || (props.section && props.section.name);
  let number = props.sectionNumber || (props.section && props.section.number);

  return (
    <div className='application-page row'>
      <ApplicationHeader
        applicationType = {props.section.applicationType}
      />
      <Header
        number={number}
        name={name}
      />
      {props.children}
      <HomeLink />
    </div>
  );
};

export default Page;

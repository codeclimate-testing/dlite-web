'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HomeLink           from './home-link.jsx';
import GoogleAnalytics    from './google-analytics.jsx';
import SectionHeader      from './section-header.jsx';
import { isLoggedIn }     from '../helpers/data/cookies';

const setTitleLiteral = (title, section) => {
  if (!title) { return; }
  document.title = title;
};

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
};

const ApplicationHeader = (props) => {
  return ReactDOM.createPortal(
    <div className='application-header'>
      {props.applicationType}
    </div>, document.getElementById('application-header')
  );
}

const Logout = (props) => {
  if (!isLoggedIn(props)) { return null;}
  let url = `/apply/${props.appName}/log-out`;
  return ReactDOM.createPortal(
    <a href={url}>Log out</a>, document.getElementById('log-out')
  );
}

const Page = (props) => {
  setTitle(props.pageTitle, props.section);
  let name = props.sectionName || (props.section && props.section.name);

  return (
    <div className='application-page'>
      <GoogleAnalytics />

      <ApplicationHeader
        applicationType = {props.section.applicationType}
      />
      <SectionHeader
        name={name}
      />
      <Logout
        appName = {props.appName}
      />
      {props.children}

      <HomeLink />

    </div>
  );
};

export default Page;

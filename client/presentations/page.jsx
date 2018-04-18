'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HomeLink           from './home-link.jsx';
import EmojiDebugLink     from './emoji-link.jsx';
import SectionHeader      from './section-header.jsx';
import { getLanguageClass } from '../helpers/data/translator';
import { signInURL }      from '../helpers/data/pathnames';

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
  if (!props.isLoggedIn) { return null;}
  let url = '/apply/log-out';
  return ReactDOM.createPortal(
    <a href={url} >Log out</a>, document.getElementById('log-out')
  );
}

const Page = (props) => {
  setTitle(props.pageTitle, props.section);
  let name = props.sectionName || (props.section && props.section.name);
  let languageClass = getLanguageClass(props.translationLanguage);

  return (
    <div className={`application-page ${languageClass}`}>

      <ApplicationHeader
        applicationType = {props.section.applicationType}
      />
      <SectionHeader
        name={name}
      />
      <Logout
        isLoggedIn = {props.isLoggedIn}
      />
      {props.children}

      <HomeLink />

      <EmojiDebugLink
        translationLanguage    =  { props.translationLanguage }
        onEmojiDebug           = { props.onEmojiDebug }
      />

    </div>
  );
};

export default Page;

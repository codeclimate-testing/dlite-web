'use strict';

import React              from 'react';
import Accordion          from '../../../containers/accordion.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';
import TranslatorList     from '../../../i18n/translator-list.jsx';


const ClassCDriveItems = (props) => {
  return (
    <TranslatorList
      tag             = 'li'
      translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classC.driveItems'
      />
  );
};

const ClassBDriveItems = (props) => {
  return (
    <TranslatorList
      tag             = 'li'
      translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classB.driveItems'
      />
  );
};

const ClassADriveItems = (props) => {
  return (
    <TranslatorList
      tag             = 'li'
      translationPath = 'cdl.licenseClassPage.classA.driveItems'
      />
  );
};

const ClassBTowItems = (props) => {
  return (
    <TranslatorList
      tag             = 'li'
      translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classB.towItems'
      />
  );
};

const ClassATowItems = (props) => {
  return (
    <TranslatorList
      tag             = 'li'
      translationPath = 'cdl.licenseClassPage.classA.towItems'
      />
  );
};

const FAQ = (props) => {
  return (
    <Accordion
      id    = 'cdl-class'
      title = 'cdl.licenseClassPage.FAQNotSureWhatClass.title'
    >
      <div>
        <Translator
          tag             = 'h3'
          className       = 'question'
          translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classC.header'
          tabIndex        = '0'
        />
        <Translator
          tag             = 'h4'
          translationPath = 'cdl.licenseClassPage.youMayDrive'
        />

        <ul className='bullet-list'>
          <ClassCDriveItems {...props}/>
        </ul>

        <Translator
          tag             = 'p'
          translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classC.explanation'
        />
      </div>

      <div>
        <Translator
          tag             = 'h3'
          className       = 'question'
          translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classB.header'
          tabIndex        = '0'
        />
        <Translator
          tag             = 'h4'
          translationPath = 'cdl.licenseClassPage.youMayDrive'
        />

        <ul className='bullet-list'>
          <ClassBDriveItems {...props}/>
        </ul>

        <Translator
          tag             = 'h4'
          translationPath = 'cdl.licenseClassPage.youMayTow'
        />

        <ul className='bullet-list'>
          <ClassBTowItems {...props}/>
        </ul>
      </div>

      <div>
        <Translator
          tag             = 'h3'
          className       = 'question'
          translationPath = 'cdl.licenseClassPage.classA.header'
          tabIndex        = '0'
        />
        <Translator
          tag             = 'h4'
          translationPath = 'cdl.licenseClassPage.youMayDrive'
        />

        <ul className='bullet-list'>
          <ClassADriveItems {...props}/>
        </ul>

        <Translator
          tag             = 'h4'
          translationPath = 'cdl.licenseClassPage.youMayTow'
        />

        <ul className='bullet-list'>
          <ClassATowItems {...props}/>
        </ul>

      </div>
    </Accordion>
  );
}

export default FAQ;

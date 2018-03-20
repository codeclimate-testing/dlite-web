'use strict';

import React              from 'react';
import Accordion          from '../../../containers/accordion.jsx';
import translations       from '../../../i18n';
import Translator         from '../../../i18n/translator-tag.jsx';
import Translate          from '../../../i18n/translate-tag.jsx';


const ClassCDriveItems = (props) => {
  let locale = props.locale;
  return translations[locale].cdl.licenseClassPage.FAQNotSureWhatClass.classC.driveItems.map((text, i) => {
    return (
      <Translate tag='li' key={i} keyProp={i}>
        {text}
      </Translate>
    );
  });
};

const ClassBDriveItems = (props) => {
  let locale = props.locale;
  return translations[locale].cdl.licenseClassPage.FAQNotSureWhatClass.classB.driveItems.map((text, i) => {
    return (
      <Translate tag='li' key={i} keyProp={i}>
        {text}
      </Translate>
    );
  });
};

const ClassADriveItems = (props) => {
  let locale = props.locale;
  return translations[locale].cdl.licenseClassPage.classA.driveItems.map((text, i) => {
    return (
      <Translate tag='li' key={i} keyProp={i}>
        {text}
      </Translate>
    );
  });
};

const ClassBTowItems = (props) => {
  let locale = props.locale;
  return translations[locale].cdl.licenseClassPage.FAQNotSureWhatClass.classB.towItems.map((text, i) => {
    return (
      <Translate tag='li' key={i} keyProp={i}>
        {text}
      </Translate>
    );
  });
};

const ClassATowItems = (props) => {
  let locale = props.locale;
  return translations[locale].cdl.licenseClassPage.classA.towItems.map((text, i) => {
    return (
      <Translate tag='li' key={i} keyProp={i}>
        {text}
      </Translate>
    );
  });
};



const FAQ = (props) => {
  let locale = props.locale;
  return (
    <Accordion
      id='cdl-class'
      title={translations[locale].cdl.licenseClassPage.FAQNotSureWhatClass.title}
    >
      <div>
        <Translator
          tag             = 'h3'
          className       = 'question'
          translationPath = 'cdl.licenseClassPage.FAQNotSureWhatClass.classC.header'
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

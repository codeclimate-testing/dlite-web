'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import SelectDropdown     from '../../containers/select-dropdown.jsx';
import TextInput          from '../text-input.jsx';
import SuffixSelector     from '../suffix-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Translator         from '../../i18n/translator-tag.jsx';
import TranslatorList     from '../../i18n/translator-list.jsx';

const suffixList = [
  "Sr.",
  "Jr.",
  "I",
  "II",
  "III"
];

const LegalNameForm = (props) => {
  return (
    <Page
      sectionKey='intro'
      {...props}
    >
      <form onSubmit={ props.onSubmit } className='legal-name-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.namePage.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.namePage.explanation'
        />

        <fieldset role='group' aria-label='Name'>
          <TextInput
            {...props}
            identifier    = 'firstName'
            value         = { props.legalName.firstName }
            errorMessage  = { props.validations.firstName() }
          >
            <Translator tag = 'span' translationPath = 'shared.labels.firstName' />
          </TextInput>

          <TextInput
            {...props}
            identifier    = 'middleName'
            value         = { props.legalName.middleName }
            errorMessage  = { props.validations.middleName() }
          >
            <Translator tag = 'span' translationPath = 'shared.labels.middleName' />
          </TextInput>

          <TextInput
            {...props}
            identifier    = 'lastName'
            value         = { props.legalName.lastName }
            errorMessage  = { props.validations.lastName() }
          >
            <Translator tag = 'span' translationPath = 'shared.labels.lastName' />
          </TextInput>

          <SelectDropdown
            name          = 'suffix'
            id            = 'suffix'
            selected      = { props.legalName.suffix }
            hover         = { props.hover }
            onChange      = { props.onSelectChange }
            changeAction  = { props.changeAction }
            values        = { suffixList }
          >
            <Translator tag = 'span' translationPath = 'intro.namePage.suffixLabel' />
          </SelectDropdown>
        </fieldset>

        <NavigationButtons
          errorMessage={ props.validations.all() }
          {...props}
        />
      </form>
    </Page>
  );
};

export default LegalNameForm;

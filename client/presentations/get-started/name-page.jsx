'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import SelectDropdown     from '../../containers/select-dropdown.jsx';
import TextInput          from '../text-input.jsx';
import SuffixSelector     from '../suffix-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import translations       from '../../i18n';
import Translation        from '../../i18n/translate-tag.jsx';

const LegalNameForm = (props) => {
  let locale = props.locale;
  let suffixValues = ['', ...translations[locale].intro.namePage.suffixValues];

  return (
    <Page
      sectionKey='intro'
      {...props}
    >
      <form onSubmit={ props.onSubmit } className='legal-name-form'>
        <Translation tag='h2' className='question'>
          {translations[locale].intro.namePage.prompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].intro.namePage.explanation}
        </Translation>

        <fieldset>
          <TextInput
            {...props}
            identifier='firstName'
            description={translations[locale].shared.labels.firstName}
            value={props.legalName.firstName}
            errorMessage={ props.validations.firstName() }
          />

          <TextInput
            {...props}
            identifier='middleName'
            description={translations[locale].shared.labels.middleName}
            value={props.legalName.middleName}
            errorMessage={ props.validations.middleName() }
          />

          <TextInput
            {...props}
            identifier='lastName'
            description={translations[locale].shared.labels.lastName}
            value={props.legalName.lastName}
            errorMessage={ props.validations.lastName() }
          />

          <SelectDropdown
            name='suffix'
            id  = 'suffix'
            selected={ props.legalName.suffix }
            hover={ props.hover }
            onChange={ props.onSelectChange }
            changeAction={ props.changeAction }
            values={ suffixValues }
            description={translations[locale].intro.namePage.suffixLabel}
          />
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

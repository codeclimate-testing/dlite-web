'use strict';

import React                            from 'react';
import radioYesNoGroup                  from '../../radio-yes-no-group.jsx';
import RadioSelector                    from'../../radio-selector.jsx';
import RadioCollection                  from '../../radio-selector-collection.jsx';
import MessageBox                       from '../../message-box.jsx';
import { guardianSignsAtDMV }           from '../../../helpers/data/youth';
import Translator                       from '../../../i18n/translator-tag.jsx';

const MessageNo = (props) => {
  if ( guardianSignsAtDMV(props)) {
    return (
      <MessageBox className='info'>
        <div>
          <Translator
            tag             = 'p'
            translationPath = 'parentGuardianSignaturePage.signatureSection.explanation'
          />
        </div>
      </MessageBox>
    );
   }
   return null;
};

const SignatureChoice = (props) => {
  return (
    <div className='signature-choice-form'>
      <Translator
        tag             = 'h2'
        translationPath = 'parentGuardianSignaturePage.Prompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'parentGuardianSignaturePage.explanation'
      />
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'parentGuardianSignaturePage.methodSection.prompt'
        tabIndex        = '0'
      />
      <div>
        <fieldset role='group' aria-label='Guardian available choice'>
          <RadioCollection
            {...props}
            name          = 'isSigned'
            selectedValue = { props.guardianSignature.isSigned }
            onChange      = { props.onGuardianSignatureChange }
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.isSigned()}
          >

          <RadioSelector value='signElectronically'>
            <Translator tag = 'span' translationPath = 'parentGuardianSignaturePage.methodSection.values.electronically'/>
          </RadioSelector>

          <RadioSelector value='signAtDMV'>
            <Translator tag = 'span' translationPath = 'parentGuardianSignaturePage.methodSection.values.atDMV'/>
          </RadioSelector>

          <RadioSelector value='emancipatedMinor'>
            <Translator tag = 'span' translationPath = 'parentGuardianSignaturePage.methodSection.values.emancipated'/>
          </RadioSelector>

          </RadioCollection>
        </fieldset>
          <MessageNo {...props} />
      </div>
    </div>
  );
};

export default SignatureChoice;

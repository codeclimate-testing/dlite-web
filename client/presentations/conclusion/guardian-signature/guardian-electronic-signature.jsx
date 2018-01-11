'use strict'

import React        from 'react';

import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import TextInput          from '../../text-input.jsx';
import NumberInput        from '../../number-input.jsx';


const ElectronicSignature = (props) => {
  let guardianID = props.guardianID;

  return (
    <div className='electronic-signature'>
      <CheckboxSelector
        {...props}
        name='acceptLiabilities'
        value={`acceptLiabilities_${guardianID}`}
        selected={props.guardianSignature.guardianInfo[guardianID].acceptLiabilities}
        text='I/We accept civil liability for this minor and understand a provisional permit issued to a minor is not valid until he/she begins driver training.'
      />

      <p>Please type your name and today’s date to electronically sign.</p>

      <TextInput
        {...props}
        identifier='signature'
        description='Parent/Guardian signature'
        value={props.guardianSignature.guardianInfo[guardianID].signature}
      />

      <div className='row inner-bottom'>
        <NumberInput
          {...props}
          identifier='signatureDateMonth'
          description='MM'
          value={props.guardianSignature.guardianInfo[guardianID].signatureDateMonth}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='signatureDateDay'
          description='DD'
          value={props.guardianSignature.guardianInfo[guardianID].signatureDateDay}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='signatureDateYear'
          description='YYYY'
          value={props.guardianSignature.guardianInfo[guardianID].signatureDateYear}
        />
      </div>
    </div>
  );
}

export default ElectronicSignature;

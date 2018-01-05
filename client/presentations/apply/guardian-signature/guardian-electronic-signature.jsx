'use strict'

import React        from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import TextInput          from '../../text-input.jsx';
import NumberInput        from '../../number-input.jsx';


const ElectronicSignature = (props) => {
  let guardianID = props.guardianID;

  return (
    <div className='electronic-signature'>
      <CheckboxSelector
        {...props}
        selected={props.guardianSignature.guardianInfo[guardianID].acceptLiabilities}
        value={`acceptLiabilities_${guardianID}`}
        text='I/We accept civil liability for this minor and understand a provisional permit issued to a minor is not valid until he/she begins driver training.'
      />

      <h4>Please type your name and today’s date to electronically sign.</h4>

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
          description='Month'
          value={props.guardianSignature.guardianInfo[guardianID].signatureDateMonth}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='signatureDateDay'
          description='Day'
          value={props.guardianSignature.guardianInfo[guardianID].signatureDateDay}
        />

        <div className='unit spacer' />

        <NumberInput
          {...props}
          identifier='signatureDateYear'
          description='Year'
          value={props.guardianSignature.guardianInfo[guardianID].signatureDateYear}
        />
      </div>
    </div>
  );
}

export default ElectronicSignature;
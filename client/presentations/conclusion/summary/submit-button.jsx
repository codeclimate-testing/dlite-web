'use strict';
import React                       from 'react';

const SubmitButton = (props) => {
  if(APP_ENV && (APP_ENV === 'development' || APP_ENV === 'test')){
    return (
        <div className='navigation-buttons row' key='save-and-continue'>
          <button type='submit' className='arrow-button forward'>
            Save & Continue
          </button>
        </div>
    );
  }
  return (
      <ContinueButton disabled={props.continueDisabled} key="submit"/>
  );
};

export default SubmitButton;
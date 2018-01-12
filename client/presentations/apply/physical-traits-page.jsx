'use strict';


import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import EyeColor             from './physical-traits/eye-color.jsx';
import HairColor            from './physical-traits/hair-color.jsx';
import Sex                  from './physical-traits/sex.jsx';

const PhysicalPage = (props) => {
  return (
    <Page 
      {...props}
      sectionKey='myBasics'
    >
      <form onSubmit    = {props.onSubmit} className='physical-traits-form'>
        <Sex
          {...props}
          selectedValue = {props.physicalTraits.sex}
          errorMessage={ props.validations.sex() }
        />
        <br></br>
        <EyeColor
          {...props}
          selectedValue = {props.physicalTraits.eyeColor}
          errorMessage={ props.validations.eyeColor() }
        />
        <br></br>
        <HairColor
          {...props}
          selectedValue = {props.physicalTraits.hairColor}
          errorMessage={ props.validations.hairColor() }
        />

      <NavigationButtons
        {...props}
        errorMessage={props.validations.all()}
      />
      </form>
    </Page>
  )
}

export default PhysicalPage;

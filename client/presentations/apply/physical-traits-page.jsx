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
          onChange      = {props.onChange}
          selectedValue = {props.physicalTraits.sex}
        />
        <br></br>
        <EyeColor
          onChange      = {props.onChange}
          selectedValue = {props.physicalTraits.eyeColor}
        />
        <br></br>
        <HairColor
          onChange      = {props.onChange}
          selectedValue = {props.physicalTraits.hairColor}
          onBack        = {props.onBack}
        />

        <NavigationButtons {...props}/>
      </form>
    </Page>
  )
}

export default PhysicalPage;
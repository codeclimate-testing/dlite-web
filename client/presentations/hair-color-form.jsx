'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const HairColorForm = (props) => {
  return (    
    <div>
      <Link to={ alicePath('/') } >Back to application</Link>
      <form name="hair-color-form" onSubmit={props.onSubmit} className='hair-color-form'>

        <div className="input-container hair-color">
          <button name="hair-color-auburn" value="Auburn" onClick={props.onClick} className={props.hairColor.hairColor === "Auburn" ? 'selected-button' : 'unselected-button'}> Auburn </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-bald" value="Bald" onClick={props.onClick} className={props.hairColor.hairColor === "Bald" ? 'selected-button' : 'unselected-button'}> Bald </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-black" value="Black" onClick={props.onClick} className={props.hairColor.hairColor === "Black" ? 'selected-button' : 'unselected-button'}> Black </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-blonde" value="Blonde" onClick={props.onClick} className={props.hairColor.hairColor === "Blonde" ? 'selected-button' : 'unselected-button'}> Blonde </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-brown" value="Brown" onClick={props.onClick} className={props.hairColor.hairColor === "Brown" ? 'selected-button' : 'unselected-button'}> Brown </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-gray" value="Gray" onClick={props.onClick} className={props.hairColor.hairColor === "Gray" ? 'selected-button' : 'unselected-button'}> Gray </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-red" value="Red" onClick={props.onClick} className={props.hairColor.hairColor === "Red" ? 'selected-button' : 'unselected-button'}> Red </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-white" value="White" onClick={props.onClick} className={props.hairColor.hairColor === "White" ? 'selected-button' : 'unselected-button'}> White </button>
        </div>

        <div className="input-container hair-color">
          <button name="hair-color-other" value="Other" onClick={props.onClick} className={props.hairColor.hairColor === "Other" ? 'selected-button' : 'unselected-button'}> Other </button>
        </div>

        <div className="input-container">
          <input type="submit" name="submit-hair-color" value="Submit" />
        </div>
    </form>
  </div>
  )
};

export default HairColorForm;
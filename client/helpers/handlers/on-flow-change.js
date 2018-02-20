'use strict';

import { addApp }           from '../../actions';
import {
  splitPathname,
  addingApp
 }    from '../data/pathnames';


export default (dispatch) =>  {
  return (props) => {
    if (!props.hasOwnProperty('location')){ return; }

    let value = splitPathname(props.location.pathname);
    if (value === props.addApp || !addingApp(value)) { return; }
    dispatch(addApp(value));
  };
};
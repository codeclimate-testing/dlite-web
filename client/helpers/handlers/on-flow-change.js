'use strict';

import { addApp }           from '../../actions';
import {
  splitPathname,
  changeFlow
 }    from '../data/pathnames';


export default function onFlowChangeGenerator(dispatch) {
  return (props) => {
    if (!props.hasOwnProperty('location')){ return; }

    let value = splitPathname(props.location.pathname);
    if (value === props.addApp || !changeFlow(value)) { return ; }
    dispatch(addApp(value));
  };
};
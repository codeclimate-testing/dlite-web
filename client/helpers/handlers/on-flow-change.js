'use strict';

import { addApp }           from '../../actions';
import {
  splitPathname,
  addingApp
 }    from '../data/pathnames';


export default (dispatch) =>  {
  return (app) => {
    if (app !== 'id-card' && app !== 'driver-license'){ return; }
    dispatch(addApp(app));
  };
};
'use strict';
import {
  getID,
  getDL
} from './card-type';

export const hasMultipleCards = (props) => {
  return getDL(props) && getID(props)
};
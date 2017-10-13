'use strict';

import React from "react";
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const HomeLink = () => {
  return <Link className='sections' to={ alicePath('/links') } tabIndex='-1' >Application sections</Link>;
};

export default HomeLink;

'use strict';

import React from "react";
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const HomeLink = () => {
  return <Link to={ alicePath('/') } >Back to application</Link>;
};

export default HomeLink;

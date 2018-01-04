'use strict';

import React from 'react';
import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mock from 'mock-require';

// Note: there is a terrible bug in the enzyme 16 adapter that
// causes an infinite loop. Yay!
//
// So, this is a terrible hack, mocking require in node to avoid
// the createPortal function in ReactDOM.
//
// Mocking require is a really bad smell and should not be used
// anywhere that there isn't this kind of library bug.

let ReactDom = require('react-dom');
const ReDom = ReactDom;
ReDom.createPortal = function (el, location) {
  return null;
};
mock('ReactDom', ReDom);
ReactDom = mock.reRequire('react-dom');

Enzyme.configure({ adapter: new Adapter() });

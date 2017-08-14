'use strict';

import React from 'react';

const Option = (props) => {
  return (
    <option value={ props.identifier }>{ props.identifier }</option>
  );
}

const stateList = [
	"AK",
	"AR",
	"AZ",
	"CA",
	"CO",
	"CT",
	"DC",
	"DE",
	"FL",
	"GA",
	"HI",
	"IA",
	"ID",
	"IL",
	"IN",
	"KS",
	"KY",
	"LA",
	"MA",
	"MD",
	"ME",
	"MI",
	"MN",
	"MO",
	"MS",
	"MT",
	"NC",
	"NE",
	"NH",
	"NJ",
	"NM",
	"NV",
	"NY",
	"ND",
	"OH",
	"OK",
	"OR",
	"PA",
	"RI",
	"SC",
	"SD",
	"TN",
	"TX",
	"UT",
	"VT",
	"VA",
	"WA",
	"WI",
	"WV",
	"WY",
];

const StateSelector = (props) => {
  let id = `${props.type}State`;
  let value = props.value || 'CA';

  let options = stateList.map((stateCode) => {
    return <Option key={stateCode} identifier={stateCode} value={props.value}/>;
  });

  return (
    <div className='select-input-block'>
      <label className='row' htmlFor={id}>State</label>
      <select name='state' id={id} value={value}>
        { options }
      </select>
    </div>
  );
};

export default StateSelector;

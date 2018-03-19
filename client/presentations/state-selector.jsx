'use strict';

import React 						from 'react';
import SelectDropdown		from './select-dropdown.jsx';
import Translator				from '../i18n/translator-tag.jsx';

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
	"WY"
];

const StateSelector = (props) => {
  return (
    <div className='select-input-block'>
			<SelectDropdown
				name				= { props.name }
				id					= { props.id }
				values			= { stateList }
				onChange		= { props.onChange }
				description	=	{ <Translator tag = 'span' translationPath = 'myBasics.addressesPage.stateLabel' /> }
				selected		= { props.value }
			/>
    </div>
  );
};

export default StateSelector;

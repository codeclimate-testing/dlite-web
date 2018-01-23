'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';

const GuardianSignature = (props) => {

  let isSigned = props.guardianSignature.isSigned;
  if (!dataPresent.value(isSigned)) { return null; }

  if(isSigned === 'No') {
    return (
      <div className='summary-section'>
        <p> Parent/guardian available: {isSigned} </p>
      </div>
    );
  }

  let guardianInfoFirst = props.guardianSignature.guardianInfo[0];
  let guardianInfoSecond = props.guardianSignature.guardianInfo[1];
  let content = [];

  content.push(
    <div className='summary-section' key='guardian-first-info'>
      <p> Parent/guardian available: {isSigned} </p>
      <hr/>
      <p> Guardian First </p>
      <p> Accept Liabilities:       {guardianInfoFirst.acceptLiabilities ? 'Yes' : 'No'} </p>
      <p> Signature:                {guardianInfoFirst.signature.name} </p>
      <p> Signature month:          {guardianInfoFirst.signature.month} </p>
      <p> Signature day:            {guardianInfoFirst.signature.day} </p>
      <p> Signature year:           {guardianInfoFirst.signature.year} </p>
      <p> Phone number:             {guardianInfoFirst.phoneNumber} </p>
      <p>Street Address:            {guardianInfoFirst.address.street_1}</p>
      <p>Apartment or Unit Number:  {guardianInfoFirst.address.street_2}</p>
      <p>City:                      {guardianInfoFirst.address.city}</p>
      <p>State:                     {guardianInfoFirst.address.state}</p>
      <p>Zip:                       {guardianInfoFirst.address.zip}</p>
      <p> ID number:                {guardianInfoFirst.ID.number} </p>
      <p> ID issued by:             {guardianInfoFirst.ID.issuedBy} </p>
      <p> ID expiration month:      {guardianInfoFirst.ID.expirationMonth} </p>
      <p> ID expiration day:        {guardianInfoFirst.ID.expirationDay} </p>
      <p> ID expiration year:       {guardianInfoFirst.ID.expirationYear} </p>
    </div>
  );

  if(guardianInfoSecond.acceptLiabilities) {
    content.push(
      <div className='summary-section' key='guardian-second-info'>
        <hr/>
        <p> Guardian Second </p>
        <p> Accept Liabilities:       {guardianInfoSecond.acceptLiabilities ? 'Yes' : 'No'} </p>
        <p> Signature:                {guardianInfoSecond.signature.name} </p>
        <p> Signature month:          {guardianInfoSecond.signature.month} </p>
        <p> Signature day:            {guardianInfoSecond.signature.day} </p>
        <p> Signature year:           {guardianInfoSecond.signature.year} </p>
        <p> Phone number:             {guardianInfoSecond.phoneNumber} </p>
        <p>Street Address:            {guardianInfoSecond.address.street_1}</p>
        <p>Apartment or Unit Number:  {guardianInfoSecond.address.street_2}</p>
        <p>City:                      {guardianInfoSecond.address.city}</p>
        <p>State:                     {guardianInfoSecond.address.state}</p>
        <p>Zip:                       {guardianInfoSecond.address.zip}</p>
        <p> ID number:                {guardianInfoSecond.ID.number} </p>
        <p> ID issued by:             {guardianInfoSecond.ID.issuedBy} </p>
        <p> ID expiration month:      {guardianInfoSecond.ID.expirationMonth} </p>
        <p> ID expiration day:        {guardianInfoSecond.ID.expirationDay} </p>
        <p> ID expiration year:       {guardianInfoSecond.ID.expirationYear} </p>
      </div>
    );
  }

  return content;

};

export default GuardianSignature;
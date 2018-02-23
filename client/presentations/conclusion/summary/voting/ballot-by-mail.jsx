'use strict';

import React                    from 'react';
import translations             from '../../../../i18n';
import { ballotByMailSelected } from '../../../../helpers/data/voting';

const BallotByMail = (props) => {
  if (!ballotByMailSelected(props)) { return null; }

  return (
    <div className='summary-section'>
      <p> {translations.summaryPage.voterRegistration.voteByMail}: {props.ballotByMail} </p>
    </div>
  );
};

export default BallotByMail;

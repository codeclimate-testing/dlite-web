'use strict';

import React        from 'react';

import Page         from '../../containers/page.jsx';
import LinkButton   from '../link-button.jsx';
import BackButton   from '../back-button.jsx';
import translations from '../../i18n';
import {
  getNewID,
  getNewDL,
  getID,
  getDL
} from '../../helpers/data/card-type';

const Intro = (props) => {
  const linkAddress = '/my-basics/address';

  let DL = '';
  const newDL = translations.intro.getStartedPage.whatYouAreDoing.applyingLicense
  const renewingDL = translations.intro.getStartedPage.whatYouAreDoing.renewingLicense
  const updatingDL = translations.intro.getStartedPage.whatYouAreDoing.updatingLicense
  const correctingDL = translations.intro.getStartedPage.whatYouAreDoing.correctingLicense
  const replacingDL = translations.intro.getStartedPage.whatYouAreDoing.replacingLicense

  let ID = '';
  const newID = translations.intro.getStartedPage.whatYouAreDoing.applyingID;
  const reducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.applyingReducedFeeID;
  const noFeeID = <p className='translation-missing'>You are applying for a no-fee ID card</p>;
  const seniorID = translations.intro.getStartedPage.whatYouAreDoing.applyingSeniorID;

  const renewingID = translations.intro.getStartedPage.whatYouAreDoing.renewingID;
  const renewingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.renewingReducedFeeID;
  const renewingNoFeeID = <p className='translation-missing'>You are renewing a no-fee ID card</p>;
  const renewingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.renewingSeniorID;

  const updatingID = translations.intro.getStartedPage.whatYouAreDoing.updatingID;
  const updatingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID;
  const updatingNoFeeID = <p className='translation-missing'>You are updating a no-fee ID card</p>;
  const updatingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID;

  const correctingID = translations.intro.getStartedPage.whatYouAreDoing.correctingID;
  const correctingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID;
  const correctingNoFeeID = <p className='translation-missing'>You are correcting a no-fee ID card</p>;
  const correctingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.correctingSeniorID;

  const replacingID = translations.intro.getStartedPage.whatYouAreDoing.replacingID;
  const replacingReducedFeeID = translations.intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID;
  const replacingNoFeeID = <p className='translation-missing'>You are replacing a no-fee ID card</p>;
  const replacingSeniorID = translations.intro.getStartedPage.whatYouAreDoing.replacingSeniorID;



  if(getDL(props)) {
    switch(props.cardAction) {
      case 'new':
        DL = newDL;
        break;
      case 'renew':
        DL = renewingDL;
        break;
      case 'replace':
        DL = replacingDL;
        break;
      case 'change':
        if(props.cardChanges.correctOrUpdate === 'update') {
          DL = updatingDL;
        } else if(props.cardChanges.correctOrUpdate === 'correct') {
          DL = correctingDL;
        }
        break;
      default:
        DL;
    }
  }

  if(getID(props)) {
    switch(props.cardAction) {
      case 'new':
        if(props.reducedFee.ID === 'Yes') {
          ID = reducedFeeID
        } else if(props.seniorID === 'Yes') {
          ID = noFeeID
        } else if(props.seniorID === 'No') {
          ID = seniorID
        } else {
          ID = newID
        }
        break;
      case 'renew':
        if(props.reducedFee.ID === 'Yes') {
          ID = renewingReducedFeeID
        } else if(props.seniorID === 'Yes') {
          ID = renewingNoFeeID
        } else if(props.seniorID === 'No') {
          ID = renewingSeniorID
        } else {
          ID = renewingID
        }
        break;
      case 'change':
        if(props.cardChanges.correctOrUpdate === 'update') {
          if(props.reducedFee.ID === 'Yes') {
            ID = updatingReducedFeeID
          } else if(props.seniorID === 'Yes') {
            ID = updatingNoFeeID
          } else if(props.seniorID === 'No') {
            ID = updatingSeniorID
          } else {
            ID = updatingID
          }
        } else if(props.cardChanges.correctOrUpdate === 'correct') {
          if(props.reducedFee.ID === 'Yes') {
            ID = correctingReducedFeeID
          } else if(props.seniorID === 'Yes') {
            ID = correctingNoFeeID
          } else if(props.seniorID === 'No') {
            ID = correctingSeniorID
          } else {
            ID = correctingID
          }
        }
        break;
      case 'replace':
        if(props.reducedFee.ID === 'Yes') {
          ID = replacingReducedFeeID
        } else if(props.seniorID === 'Yes') {
          ID = replacingNoFeeID
        } else if(props.seniorID === 'No') {
          ID = replacingSeniorID
        } else {
          ID = replacingID
        }
        break;
      default:
        ID;
    }
  }

  const classC = translations.intro.getStartedPage.whatYouAreDoing.classes.C;
  const classM = translations.intro.getStartedPage.whatYouAreDoing.classes.M;
  const classA = translations.intro.getStartedPage.whatYouAreDoing.classes.A;
  const classB = translations.intro.getStartedPage.whatYouAreDoing.classes.B;
  let toDriveHeader = <h4>To drive:</h4>

  if(getDL(props)) {
    toDriveHeader
  } else {
    toDriveHeader = '';
  }

  let driveList = [];
  if(getDL(props)) {
    if(props.licenseType.type.indexOf('car') > -1) {
      driveList.push(<li key='car'>{classC}</li>)
    }
    if(props.licenseType.type.indexOf('cycle') > -1) {
      driveList.push(<li key='cycle'>{classM}</li>)
    }
    if(props.licenseType.type.indexOf('long') > -1) {
      driveList.push(<li key='long'>{classA}</li>)
    }
    if(props.licenseType.type.indexOf('trailer') > -1) {
      driveList.push(<li key='trailer'>{classB}</li>)
    }
  };

  let endorsement = '';
  const fireFighterEndorsement = translations.intro.getStartedPage.whatYouAreDoing.firefighterEndorsement;

  if(getDL(props)) {
    if(props.licenseType.endorsement.indexOf('firefighter') > -1) {
      endorsement = fireFighterEndorsement
    }
  }

  let realIdCompliant = '';
  const idRealID = translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantID;
  const dlRealID = translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense;

  if(props.realID.getRealID === 'Yes') {
    if(props.realID.realIdDesignation === 'ID' || (getID(props) && !getDL(props))) {
      realIdCompliant = idRealID
    }
    if(props.realID.realIdDesignation === 'DL' || (getDL(props) && !getID(props))) {
      realIdCompliant = dlRealID
    }
  }

  let licenseExplanation = '';
  let IDExplanation = '';
  const licenseUpdate = translations.intro.getStartedPage.explanation.update.license;
  const IDUpdate = translations.intro.getStartedPage.explanation.update.id;
  const licenseCorrection = translations.intro.getStartedPage.explanation.correct.license;
  const IDCorrection = translations.intro.getStartedPage.explanation.correct.id;
  const licenseReplace = translations.intro.getStartedPage.explanation.replace.license;
  const IDReplace = translations.intro.getStartedPage.explanation.replace.id;

  if(getDL(props)) {
    switch(props.cardAction) {
      case 'change':
        if(props.cardChanges.correctOrUpdate === 'update') {
          licenseExplanation = licenseUpdate;
        } else if(props.cardChanges.correctOrUpdate === 'correct') {
          licenseExplanation = licenseCorrection;
        }
        break;
      case 'replace':
        licenseExplanation = licenseReplace;
        break;
      default:
        licenseExplanation;
    }
  }

  if(getID(props)) {
    switch(props.cardAction) {
      case 'change':
        if(props.cardChanges.correctOrUpdate === 'update') {
          IDExplanation = IDUpdate;
        } else if(props.cardChanges.correctOrUpdate === 'correct') {
          IDExplanation = IDCorrection;
        }
        break;
      case 'replace':
        IDExplanation = IDReplace;
        break;
      default:
        licenseExplanation;
    }
  }


  return (
    <Page {...props} >
      <div className='intro-info'>
        <h2 className='question'>Welcome to the Online Driver License application!</h2>
        <h4>To review:</h4>
        <ul>
          <li>{ID}</li>
          <li>{DL}</li>
        </ul>
        <br></br>
        {toDriveHeader}
        <ul className='bullet-list'>
          {driveList}
        </ul>
        <p>{endorsement}</p>
        <p>{realIdCompliant}</p>
        <p>{licenseExplanation}</p>
        <p>{IDExplanation}</p>

        <hr/>
        <p>This form is broken in 4 sections:</p>
        <ol className='decimal-list'>
          <li>My basics</li>
          <li>My history</li>
          <li>Organ donation</li>
          <li>Voter registration</li>
        </ol>

        <p>The DMV cares about your privacy. We will protect your data.</p>

        <div className='navigation-buttons row'>
          <hr/>

          <p>The online form takes most customers<br/>
            <b>10 minutes</b>
          </p>

          <div className='shadow-container unit'>
            <BackButton
              onBack={props.onBack}
              key='back-button'
            />
          </div>

          <div className='shadow-container unit-right'>
            <LinkButton
              to={linkAddress}
              linkText='Get started'
              className='continue get-started forward'
            />
          </div>
        </div>
      </div>
    </Page>
  );
}



export default Intro;

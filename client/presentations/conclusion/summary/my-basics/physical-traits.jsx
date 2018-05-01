'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import {
  female,
  male,
  blackEyes,
  blueEyes,
  brownEyes,
  grayEyes,
  greenEyes,
  hazelEyes,
  auburnHair,
  baldHair,
  blackHair,
  blondeHair,
  brownHair,
  grayHair,
  redHair,
  whiteHair,
  otherHair,
}  from '../../../../helpers/data/physical-traits';

const Sex = (props) => {
  if(female(props)) {
    return (
      <SummaryItem
        title = 'shared.labels.sex'
        text  = 'myBasics.traitsPage.sex.values.1'
      />
    )
  } else if(male(props)) {
    return (
      <SummaryItem
        title = 'shared.labels.sex'
        text  = 'myBasics.traitsPage.sex.values.0'
      />
    )
  }
}

const EyeColor = (props) => {
  if(blackEyes(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = 'myBasics.traitsPage.eyeColor.values.0'
      />
    )
  } else if(blueEyes(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = 'myBasics.traitsPage.eyeColor.values.1'
      />
    )
  } else if(brownEyes(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = 'myBasics.traitsPage.eyeColor.values.2'
      />
    )
  } else if(grayEyes(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = 'myBasics.traitsPage.eyeColor.values.3'
      />
    )
  } else if(greenEyes(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = 'myBasics.traitsPage.eyeColor.values.4'
      />
    )
  } else if(hazelEyes(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.eyeColor'
        text      = 'myBasics.traitsPage.eyeColor.values.5'
      />
    )
  } 
}

const HairColor = (props) => {
  if(auburnHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.0'
      />
    )
  } else if(baldHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.1'
      />
    )
  } else if(blackHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.2'
      />
    )
  } else if(blondeHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.3'
      />
    )
  } else if(brownHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.4'
      />
    )
  } else if(grayHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.5'
      />
    )
  } else if(redHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.6'
      />
    )
  } else if(whiteHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.7'
      />
    )
  } else if(otherHair(props)) {
    return (
      <SummaryItem
        className = 'follower'
        title     = 'summaryPage.myBasics.hairColor'
        text      = 'myBasics.traitsPage.hairColor.values.8'
      />
    )
  }
}

const PhysicalTraits = (props) => {
  if (!dataPresent.physicalTraits(props.physicalTraits)) { return null; }
  return (
    <PageSummaryLink
      {...props}
    >
      <Sex {...props} />
      <EyeColor {...props} />
      <HairColor {...props} />

    </PageSummaryLink>
    )
};

export default PhysicalTraits;

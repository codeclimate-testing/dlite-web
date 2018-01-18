'use strict';

import { hasValue }           from '../data/validations';
import { hasExistingCard }    from './card-actions'

export const mustChooseBenefits = (props) => {
  return props.veteransService.isVeteran === 'Yes'
};

export const mustChoosePreviousDesignation = (props) => {
  return props.veteransService.isVeteran === 'Yes' && hasExistingCard(props)
};

export const mustChooseIdentifier = (props) => {
  return props.veteransService.isVeteran === 'Yes' && !hasExistingCard(props)
};

export const mustChooseKeepVeteranIdentifier = (props) => {
  return props.veteransService.isVeteran === 'Yes' && hasExistingCard(props) && props.veteransService.previouslyDesignated === 'Yes'
};

export const mustChooseAddVeteranIdentifier = (props) => {
  return props.veteransService.isVeteran === 'Yes' && hasExistingCard(props) && props.veteransService.previouslyDesignated === 'No'
};


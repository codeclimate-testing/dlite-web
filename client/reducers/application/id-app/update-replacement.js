import { TYPES }            from '../../../actions';
import reduceByCardType     from '../reduce-by-card-type';

const defaultState = () => {
  return {
    reason: ''
  }
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CARD_REPLACEMENT) { return state; }

  return reduceByCardType(action, state, 'ID');
};

export default formReducer;
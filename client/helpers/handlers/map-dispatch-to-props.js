'use strict';
import handlers     from './index';

export default function mapDispatchToProps(action){
  return function(dispatch) {
    const onChange = handlers.onInputChange(action, dispatch);
    const onSubmit = handlers.onFormSubmit(dispatch);
    const onBlur   = handlers.onBlur(dispatch);
    const onFocus  = handlers.onFocus(dispatch);
    const onBlurValidate = handlers.onBlurValidate(dispatch);
    const onFocusClearValidation = handlers.onFocusClearValidation(dispatch);
    const onSubmitShowErrors = handlers.onSubmitShowErrors(dispatch);
    const onSelectChange = handlers.onSelectChange(action, dispatch);
    const loadTranslationFromCookie = handlers.loadTranslationFromCookie(dispatch);

    return {
      onSubmit,
      onChange,
      onBlur,
      onFocus,
      onBlurValidate,
      onFocusClearValidation,
      onSubmitShowErrors,
      onSelectChange,
      loadTranslationFromCookie,
      dispatch
    };
  }
}
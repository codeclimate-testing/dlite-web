import handlers                   from './index';
import { updateLanguage }         from '../../actions/index';
import { appLanguageIsSelected }  from '../data/application';


export default function mergeProps(stateProps, dispatchProps, ownProps){
  const { dispatch }        = dispatchProps;
  const { appLanguage }     = stateProps;

  return Object.assign({}, ownProps, {
    onFocus               : handlers.onFocus(dispatch),
    onFocusClearValidation: handlers.onFocusClearValidation(dispatch),
    onBlurValidate        : handlers.onBlurValidate(dispatch),
    onBlur                : handlers.onBlur(dispatch),
    onChange              : handlers.onInputChange(updateLanguage, dispatch),
    appLanguage           : stateProps.appLanguage,
    focused               : stateProps.focused,
    onSubmit: (e) => {
      e.preventDefault();

      if (!appLanguageIsSelected(appLanguage)) {
        dispatch(updateLanguage('appLanguage', 'en'));
      }
      return ownProps.history.push('/apply/choose');
    }
  });
};
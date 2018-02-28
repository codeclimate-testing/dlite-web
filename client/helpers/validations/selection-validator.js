import translations       from '../../i18n';
import { hasValue }       from '../data/validations';

function selectionValidator(error, name, subname) {
  return (props) => {
    let locale = props.locale;
    let value = subname ? props[name][subname] : name ? props[name] : props;
    let errors = [];

    if (!hasValue(value)) {
      errors.push(translations[locale].errorMessages[error]);
    }
    return errors;
  };
};

export default selectionValidator;

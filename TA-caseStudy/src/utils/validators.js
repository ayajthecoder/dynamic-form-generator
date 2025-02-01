import Strings from "../Constant/Strings";

export const validateField = (field, value) => {
    if (field.required && !value) {
      return Strings.errorMessage.requiredErrorMessage;
    }
  
    if (field.validation) {
      if (field.validation.minLength && value.length < field.validation.minLength) {
        return `Minimum length is ${field.validation.minLength}`;
      }
  
      if (field.validation.maxLength && value.length > field.validation.maxLength) {
        return `Maximum length is ${field.validation.maxLength}`;
      }
  
      if (field.validation.pattern && !new RegExp(field.validation.pattern).test(value)) {
        return field.validation.message || Strings.errorMessage.invalidFormat;
      }
    }
  
    return null;
  };
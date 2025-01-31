export const validateField = (field, value) => {
    if (field.required && !value) {
      return 'This field is required';
    }
  
    if (field.validation) {
      if (field.validation.minLength && value.length < field.validation.minLength) {
        return `Minimum length is ${field.validation.minLength}`;
      }
  
      if (field.validation.maxLength && value.length > field.validation.maxLength) {
        return `Maximum length is ${field.validation.maxLength}`;
      }
  
      if (field.validation.pattern && !new RegExp(field.validation.pattern).test(value)) {
        return field.validation.message || 'Invalid format';
      }
    }
  
    return null;
  };
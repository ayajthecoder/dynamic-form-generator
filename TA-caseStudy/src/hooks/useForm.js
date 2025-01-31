import { useState } from 'react';
import { validateField } from '../utils/validators';

const useForm = (schema) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    let fieldValue;

    if (type === 'checkbox') {
      const prevValue = formData[id] || [];
      fieldValue = checked
        ? [...prevValue, value]
        : prevValue.filter((val) => val !== value);
    } else if (type === 'file') {
      fieldValue = files[0];
    } else {
      fieldValue = value;
    }

    setFormData((prev) => ({ ...prev, [id]: fieldValue }));
    setErrors((prev) => ({ ...prev, [id]: validateField(schema.fields.find((f) => f.id === id), fieldValue) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    schema.fields.forEach((field) => {
      const error = validateField(field, formData[field.id]);
      if (error) newErrors[field.id] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;
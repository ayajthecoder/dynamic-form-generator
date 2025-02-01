import { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { validateField } from '../utils/validators';
import { setFormData, resetFormData } from '../redux/formSlice'; // Import actions

const useForm = (schema) => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const [formData, setFormDataState] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    let fieldValue;

    if (type === 'checkbox') {
      const prevValue = formData[id] || [];
      fieldValue = checked
        ? [...prevValue, value]
        : prevValue.filter((val) => val !== value);
    } else if (type === 'radio') {
      fieldValue = value; // For radio buttons, the value is the selected option
    } else if (type === 'file') {
      fieldValue = files[0];
    } else {
      fieldValue = value;
    }

    setFormDataState((prev) => ({ ...prev, [id]: fieldValue }));

    // Find the field object from the schema
    const field = schema.fields.find((f) => f.id === id);
    if (field) {
      setErrors((prev) => ({ ...prev, [id]: validateField(field, fieldValue) }));
    }
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
      dispatch(setFormData(formData)); // Dispatch the action correctly
    }
  };

  // Reset form function
  const resetForm = () => {
    const initialFormData = {};
    schema.fields.forEach((field) => {
      if (field.type === 'checkbox') {
        initialFormData[field.id] = []; // Reset checkboxes to an empty array
      } else {
        initialFormData[field.id] = ''; // Reset other fields to an empty string
      }
    });
    setFormDataState(initialFormData);
    setErrors({});
    dispatch(resetFormData()); // Dispatch the action correctly
  };

  return { formData, errors, handleChange, handleSubmit, resetForm };
};

export default useForm;
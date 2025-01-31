import React from 'react';
import FormField from './FormField';
import ErrorMessage from './ErrorMessage';
import useForm from '../hooks/useForm';

const FormGenerator = ({ schema }) => {
  const { formData, errors, handleChange, handleSubmit } = useForm(schema);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
      <p className="text-gray-600">{schema.formDescription}</p>
      {schema.fields.map((field) => (
        <div key={field.id}>
          <FormField field={field} value={formData[field.id]} onChange={handleChange} />
          {errors[field.id] && <ErrorMessage message={errors[field.id]} />}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
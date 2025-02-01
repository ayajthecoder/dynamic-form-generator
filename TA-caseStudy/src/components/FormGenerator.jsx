import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormField from './FormField';
import ErrorMessage from './ErrorMessage';
import useForm from '../hooks/useForm';
import Strings from '../Constant/Strings';
import FormSubmittedData from './FormSubmittedData';

const FormGenerator = ({ schema: initialSchema }) => {
  const [schema, setSchema] = useState(initialSchema);
  const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(schema);
  const submittedData = useSelector((state) => state.form.formData);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
        <p className="text-gray-600">{schema.formDescription}</p>
        {schema.fields.map((field) => (
          <div key={field.id}>
            <FormField field={field} value={formData[field.id]} onChange={handleChange} />
            {errors[field.id] && <ErrorMessage message={errors[field.id]} />}
          </div>
        ))}
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {Strings.actions.SUBMIT}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            {Strings.actions.RESET}
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <FormSubmittedData submittedData={submittedData} />
        </div>
      )}
    </>
  );
};

export default FormGenerator;
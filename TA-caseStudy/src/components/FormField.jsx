import React from 'react';

const FormField = ({ field, value, onChange }) => {
  const renderInput = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'date':
      case 'number':
        return (
          <input
            type={field.type}
            id={field.id}
            value={value || ''}
            onChange={onChange}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border rounded"
          />
        );
      case 'textarea':
        return (
          <textarea
            id={field.id}
            value={value || ''}
            onChange={onChange}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border rounded"
          />
        );
      case 'select':
        return (
          <select
            id={field.id}
            value={value || ''}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
          >
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  name={field.id}
                  value={option.value}
                  checked={value?.includes(option.value)}
                  onChange={onChange}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      case 'file':
        return (
          <input
            type="file"
            id={field.id}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-1">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
        {field.label}
      </label>
      {renderInput()}
    </div>
  );
};

export default FormField;
import React, { useEffect, useState } from 'react';
import FormGenerator from './components/FormGenerator';

const App = () => {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    fetch('/formSchema.json')
      .then((response) => response.json())
      .then((data) => setSchema(data));
  }, []);

  if (!schema) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <FormGenerator schema={schema} />
    </div>
  );
};

export default App;
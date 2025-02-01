// Function to export the schema as a JSON file
export const exportSchema = (schema) => {
    const jsonString = JSON.stringify(schema, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formSchema.json';
    link.click();
    URL.revokeObjectURL(url);
  };
  
  // Function to handle schema import
  export const importSchema = (event, callback) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSchema = JSON.parse(e.target.result);
          callback(importedSchema); // Pass the imported schema to the callback function
        } catch (error) {
          console.error('Invalid JSON file:', error);
          alert('Invalid JSON file. Please upload a valid form schema.');
        }
      };
      reader.readAsText(file);
    }
  };
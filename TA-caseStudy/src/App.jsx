import React, { useEffect, useState } from 'react';
import { GoDownload } from "react-icons/go";
import FormGenerator from './components/FormGenerator';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Strings from './Constant/Strings';
import { exportSchema } from './utils/utilities';

const App = () => {
  const [schema, setSchema] = useState(null);
  const [themeMode, setThemeMode] = useState(Strings.themes.LIGHT);

  const lightTheme = () => {
    setThemeMode(Strings.themes.LIGHT);
  };

  const darkTheme = () => {
    setThemeMode(Strings.themes.DARK);
  };

  useEffect(() => {
    document.querySelector('html').classList.remove(Strings.themes.LIGHT, Strings.themes.DARK);
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    fetch('/formSchema.json')
      .then((response) => response.json())
      .then((data) => setSchema(data));
  }, []);

  if (!schema) return <div>Loading...</div>;

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap w-full min-h-screen items-center mt-2">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-between">
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => exportSchema(schema)}
                  className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <GoDownload className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  {Strings.actions.EXPORT_SCHEMA}
                </div>
              </div>
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <FormGenerator schema={schema} />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import FormGenerator from './components/FormGenerator';
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Strings from './Constant/Strings';

const App = () => {
  const [schema, setSchema] = useState(null);
  const [themeMode, setThemeMode] = useState(Strings.themes.LIGHT)

  const lightTheme = () => {
    setThemeMode(Strings.themes.LIGHT)
  }

  const darkTheme = () => {
    setThemeMode(Strings.themes.DARK)
  }

  useEffect(() => {
    document.querySelector('html').classList.remove(Strings.themes.LIGHT, Strings.themes.DARK)
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  useEffect(() => {
    fetch('/formSchema.json')
      .then((response) => response.json())
      .then((data) => setSchema(data));
  }, []);

  if (!schema) return <div>Loading...</div>;

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
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
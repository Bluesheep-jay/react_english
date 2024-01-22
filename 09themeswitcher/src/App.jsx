import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap w-full min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm flex justify-end mx-auto ">
            <ThemeBtn></ThemeBtn>
          </div>
          <div>
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

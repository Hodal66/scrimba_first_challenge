import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleToDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "darkMode" : ""}>
      <Header darkMode={darkMode} toggleToDarkMode={toggleToDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

export default App;

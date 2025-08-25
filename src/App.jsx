import "./App.css";
import AboutMe from "./pages/AboutMe";
import { createContext, useState } from 'react';
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import TechStack from "./pages/TechStack";
import { Routes, Route } from "react-router-dom";
import { LangThemeContext } from "./LangThemeContext";

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState("en");


  return (
    <>
    <LangThemeContext.Provider value={{ lang, setLang, theme, setTheme }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/About' element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/CV' element={<CV />} />
         <Route path='/TechStack' element={<TechStack />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </LangThemeContext.Provider>
    </>
  );
}

export default App;

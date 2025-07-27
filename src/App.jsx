import "./App.css";
import AboutMe from "./components/AboutMe";

import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import CV from "./components/CV";
import TechStack from "./components/TechStack";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/About' element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/CV' element={<CV />} />
         <Route path='/TechStack' element={<TechStack />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

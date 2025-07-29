import "./App.css";
import AboutMe from "./pages/AboutMe";

import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import TechStack from "./pages/TechStack";
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

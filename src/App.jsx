import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/About' element={<AboutMe />} />
        <Route path='/Hire' element={<HireMe />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

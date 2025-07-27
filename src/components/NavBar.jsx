import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <nav className="mt-8 flex items-center justify-between">
         <img className="left-8 fixed h-auto max-w-1/8" src="src/assets/AlexLightMode.png"></img>
    <div className='right-0 fixed hidden sm:flex ml-auto mr-6 winky-rough-font'>
          <Link to="/About" className="text-black-300 font-thin hover:text-green-600 hover:text-3xl  hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">About</Link>
          <Link to="/Projects" className="text-black-300 font-thin hover:text-green-600 hover:text-3xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">Projects</Link>
        <Link to="/CV" className="text-black-300 font-thin hover:text-green-600 hover:text-3xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">CV</Link>
        <Link to="/TechStack" className="text-black-300 font-thin hover:text-green-600 hover:text-3xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">Tech Stack</Link>
          <Link to="/Contact" className="text-black-300 font-thin hover:text-green-600 hover:text-3xl hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 py-2 transition duration-600 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">Contact</Link>
        </div>
      <button
        className="block sm:hidden right-0 fixed p-2 mr-8 rounded border border-gray-300 bg-white shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      > <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-200"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-end gap-2 p-4 border-b border-gray-100">
          <span className="text-sm font-semibold mr-2">Close</span>
          <button
            id="close-icon"
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Close drawer"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


        <ul className="flex flex-col gap-2 px-6 py-6">
          <li>
            <button
              className="bg-red-100 w-full text-left py-2 px-3 rounded hover:bg-blue-50 font-semibold text-gray-800"
              onClick={() => {
                navigate("/Projects");
                setOpen(false);
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className=" bg-green-100 w-full text-left py-2 px-3 rounded hover:bg-blue-50 text-gray-800"
              onClick={() => {
                navigate("/About");
                setOpen(false);
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="bg-yellow-100 w-full text-left py-2 px-3 rounded hover:bg-blue-50 text-gray-800"
              onClick={() => {
                navigate("/CV");
                setOpen(false);
              }}
            >
              CV
            </button>
          </li>
           <li>
            <button
              className="bg-purple-100 w-full text-left py-2 px-3 rounded hover:bg-blue-50 text-gray-800"
              onClick={() => {
                navigate("/TechStack");
                setOpen(false);
              }}
            >
              Tech Stack
            </button>
          </li>
          <li>
            <button
              className="bg-purple-100 w-full text-left py-2 px-3 rounded hover:bg-blue-50 text-gray-800"
              onClick={() => {
                navigate("/Contact");
                setOpen(false);
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </aside>

    </>
  );
}

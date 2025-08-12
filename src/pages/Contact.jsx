import Footer from "../components/Footer"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return ( <>
  <main className="min-h-screen flex flex-col bg-gray-300">
  <section className="mt-24 flex-grow">
<div className="flex flex-col items-end">
    <a target="_blank" rel="noopener noreferrer" itemProp="linkedIn" href="https://www.linkedin.com/in/alexandra-straton-2747a019b/"
    className="flex items-center gap-2 cursor-pointer text-black-300 font-thin hover:text-green-600 hover:text-md  hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 transition duration-600 ease-in-out text-xs md:text-sm lg:text-xl font-small">
        https://www.linkedin.com/in/alexandra-straton-2747a019b/
        <span><FaGithub /></span></a>
    <a target="_blank" rel="noopener noreferrer" itemProp="GitHub" href="https://github.com/AlexStraton"
    className="text-xs md:text-sm lg:text-xl flex items-center gap-2 cursor-pointer text-black-300 font-thin hover:text-green-600 hover:text-md hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 transition duration-600 ease-in-out text-xs font-small">
        https://github.com/AlexStraton
        <span><FaLinkedin /></span></a>
      </div>
      </section>
     <ContactForm />
      </main>
<Footer />
  </>)
}

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return <>
<footer className="mb-0 flex justify-between items-center bg-gray-100 w-full px-6 py-2">
 <div className="text-xs md:text-xs lg:text-xs">© 2025 | Built and designed by Alexandra Straton</div>
<div className="flex flex-col items-end">
    <a target="_blank" rel="noopener noreferrer" itemProp="linkedIn" href="https://www.linkedin.com/in/alexandra-straton-2747a019b/"
    className="flex items-center gap-2 cursor-pointer text-black-300 font-thin hover:text-green-600 hover:text-md  hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 transition duration-600 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm font-medium">
        https://www.linkedin.com/in/alexandra-straton-2747a019b/
        <span><FaGithub /></span></a>
    <a target="_blank" rel="noopener noreferrer" itemProp="GitHub" href="https://github.com/AlexStraton"
    className="flex items-center gap-2 cursor-pointer text-black-300 font-thin hover:text-green-600 hover:text-md hover:border-b-2 hover:border-black transition-all duration-600 ease-in-out px-3 transition duration-600 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm font-medium">
        https://github.com/AlexStraton
        <span><FaLinkedin /></span></a>
</div>
</footer>
  </>


}

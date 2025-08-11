import { FaFileDownload } from "react-icons/fa";
import Footer from "../components/Footer";

export default function CV() {
  return <>
  <div className="mt-24 flex items-center justify-between w-full">
  <h1 className=" text-black text-6xl mx-auto p-8 font-extralight">CV</h1>
<a target="_blank" href="/AlexandraStratonCV.pdf" className="ml-4 text-4xl mr-8"><FaFileDownload /></a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2 col-span-1 flex flex-col space-y-4 p-6 lg:p-16">
  <section className="bg-gray-200 border-2 border-green-500 rounded-xl p-6">
<h1 className="m-4 font-semibold text-2xl">
  Software Engineer - Curaleaf International
  </h1>
  <p className="m-4 text-xl font-medium">
Aug 2023 - Current
  </p>
  <div className="text-left font-light text-md md:text-lg lg:text-xl">
<p>- Full-stack software engineering role working with various tech stacks across multiple applications</p>
<p>- Working with languages, frameworks and libraries include Typescript, React, Python, Quart , Javascript and Firebase</p>
<p>- Tasks include updating, maintaining and building of new features to both the staff-facing and patient-facing applications</p>
  </div>
    </section>

    <section className="bg-gray-200 border-2 border-orange-400 rounded-xl p-6">
<h1 className="mb-4 font-semibold text-2xl">
  Full Stack Software Engineer Trainee - Northcoders
  </h1>
  <p className="mb-4 text-xl font-medium">
Aug 2023 - Current
  </p>
  <div className="text-left font-light text-md md:text-lg lg:text-xl">
<p>- Accredited Software Development Bootcamp teaching  React, JavaScript fundamentals, PSQL and Express.js</p>
<p>- Designed and programmed two solo full-stack JS/React project, and a group full-stack Python & React Native project</p>
<p>-  Experience working with RESTful APIs</p>
<p>- Worked using TDD first practices</p>
  </div>
    </section>
</div>

    <aside className="col-span-1 flex flex-col h-full p-6 lg:p-16">
 <div className="bg-gray-200 border-2 border-purple-400 rounded-xl p-2 flex-1">
      <h2 className="font-semibold text-2xl mb-4">Certificates</h2>
  <div className="flex flex-col space-y-2 overflow-auto p-2">
  <img alt="Northcoders bootcamp certificate" className="w-full max-w-[200px] self-center object-contain h-auto" src="src/assets/NC-Alex-Straton-certificate-1.png"/>
   <img alt= "FreeCodeCamp Responsive Web Design certificate" className="w-full max-w-[200px] self-center object-contain h-auto" src="src/assets/FreeCodeCamp.png"/>
     <img alt="Udemy Complete javaScript Certificate" className="w-full max-w-[200px] self-center object-contain h-auto" src="src/assets/JavascriptCert.jpg"/>
 </div>
  </div>
      </aside>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-6">
<section >
  <div className="p-8 text-2xl flex flex-col bg-gray-200 border-2 border-blue-500 m-2 md:m-4 lg:m-8 rounded-xl ">
  <h2 className="text-md md:text-lg lg:text-xl mb-4">Languages Spoken</h2>
    <div className="space-y-2 font-light text-base md:text-lg">
      <p>English - Native</p>
      <p>Spanish - Native</p>
      <p>Romanian - Native</p>
      <p>French - Advanced</p>
      <p>Portuguese - Advanced</p>
    </div>
  </div>
</section>

<aside>
  <div className="p-8 text-2xl flex flex-col bg-gray-200 border-2 border-cyan-400 m-2 md:m-4 lg:m-8 rounded-xl ">
    Education
    <span className="m-4 font-light text-base text-md md:text-lg lg:text-xl">
  Postgraduate Cert. in Education
(PGCE) with Qualified Teacher
Status (QTS) 2014-2015
  </span>
<span className="m-4 font-light text-base text-md md:text-lg lg:text-xl">
  Modern Languages (French,
Spanish and Italian) University of Hull (2005-2009)
  </span>


  </div>

</aside>

      </div>
      <Footer/>
  </>
}

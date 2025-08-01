import { FaFileDownload } from "react-icons/fa";
import Footer from "../components/Footer";

export default function CV() {
  return <>
  <div className="mt-24 flex items-center justify-between w-full">
  <h1 className=" text-black text-6xl mx-auto p-8 font-extralight">CV</h1>
<a target="_blank" href="/AlexandraStratonCV.pdf" className="ml-4 text-4xl mr-8"><FaFileDownload /></a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
    <div className="md:col-span-2 col-span-1 flex flex-col">
  <section >
    <div className="p-8 flex flex-col bg-gray-200 border-2 border-grey-300 m-2 md:m-4 lg:m-8 rounded-xl ">
<span className="m-4 font-semibold text-2xl">
  Software Engineer - Curaleaf International
  </span>
  <span className="m-4 text-xl font-medium">
Aug 2023 - Current
  </span>
  <div className="text-left font-light text-xs md:text-sm">
<p>- Full-stack software engineering role working with various tech stacks across multiple applications</p>
<p>- Working with languages, frameworks and libraries include Typescript, React, Python, Quart , Javascript and Firebase</p>
<p>- Tasks include updating, maintaining and building of new features to both the staff-facing and patient-facing applications</p>
  </div>
    </div>
    </section>
    <section className="flex-[2]">
    <div className="p-8 flex flex-col bg-gray-200 border-2 border-grey-300 m-2 md:m-4 lg:m-8 rounded-xl ">
<span className="m-4 font-semibold text-2xl">
  Full Stack Software Engineer Trainee - Northcoders
  </span>
  <span className="m-4 text-xl font-medium">
Aug 2023 - Current
  </span>
  <div className="text-left font-light text-xs md:text-sm">
<p>- Accredited Software Development Bootcamp teaching  React, JavaScript fundamentals, PSQL and Express.js</p>
<p>- Designed and programmed two solo full-stack JS/React project, and a group full-stack Python & React Native project</p>
<p>-  Experience working with RESTful APIs</p>
<p>- Worked using TDD first practices</p>
  </div>
    </div>
    </section>
</div>
    <aside className="col-span-1">
 <div className="font-semibold text-2xl p-8 flex flex-col bg-gray-200 border-2 border-grey-300 m-2 md:m-4 lg:m-8 rounded-xl">
  Certificates
  <img alt="Northcoders ertificate of participation" className="w-full md:w-2/3 lg:w-1/2 object-contain mb-4 md:mb-0 md:mr-8 h-auto" src="src/assets/NC-Alex-Straton-certificate-1.png"/>
   <img alt="" className="w-full md:w-2/3 lg:w-1/2 object-contain mb-4 md:mb-0 md:mr-8 h-auto" src="src/assets/FreeCodeCamp.png"/>
     <img alt="" className="w-full md:w-2/3 lg:w-1/2 object-contain mb-4 md:mb-0 md:mr-8 h-auto" src="src/assets/JavascriptCert.jpg"/>
       <img alt="" className="w-full md:w-2/3 lg:w-1/2 object-contain mb-4 md:mb-0 md:mr-8 h-auto" src="src/assets/NC-Alex-Straton-certificate-1.png"/>
 </div>
      </aside>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
<section >
  <div className="p-8 text-2xl flex flex-col bg-gray-200 border-2 border-grey-300 m-2 md:m-4 lg:m-8 rounded-xl ">
   Languages Spoken
    <span className=" font-light text-base md:text-lg lg:text-2xl">
 English - Native
  </span>
  <span className=" font-light text-base md:text-lg lg:text-2xl">
 Spanish - Native
  </span><span className=" font-light text-base md:text-lg lg:text-2xl">
 Romanian - Native
  </span><span className="font-light text-base md:text-lg lg:text-2xl">
 French - Advanced
  </span><span className="font-light text-base md:text-lg lg:text-2xl">
 Portuguese - Advanced
  </span>
  </div>
</section>

<aside className="flex-[1]">
  <div className="p-8 text-2xl flex flex-col bg-gray-200 border-2 border-grey-300 m-2 md:m-4 lg:m-8 rounded-xl ">
    Education
    <span className="m-4 font-light text-base md:text-lg lg:text-2xl">
  Postgraduate Cert. in Education
(PGCE) with Qualified Teacher
Status (QTS) 2014-2015
  </span>
<span className="m-4 font-light text-base md:text-lg lg:text-2xl">
  Modern Languages (French,
Spanish and Italian) University of Hull (2005-2009)
  </span>


  </div>

</aside>

      </div>
      <Footer/>
  </>
}

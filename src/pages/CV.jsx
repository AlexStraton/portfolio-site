import { FaFileDownload } from "react-icons/fa";
import Footer from "../components/Footer";
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";

export default function CV() {
    const { lang } = useContext(LangThemeContext);


  return <>
  <div className="mt-24 flex items-center justify-between w-full">
  <h1 className=" text-black text-6xl mx-auto p-8 font-extralight">{lang === 'en' ? "CV" : "Curriculum"}</h1>
  {lang === 'en' ? <a target="_blank" href="/AlexandraStratonCV.pdf" className="ml-4 text-4xl mr-8"><FaFileDownload /></a> : <a target="_blank" href="/ESPAlexStratonCurriculum.pdf" className="ml-4 text-4xl mr-8"><FaFileDownload /></a>}

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2 col-span-1 flex flex-col space-y-4 p-6 lg:p-16">
  <section className="bg-gray-200 border-2 border-green-500 rounded-xl p-6">
<h1 className="m-4 font-semibold text-2xl">
  {lang === 'en' ? "Software Engineer - Curaleaf International" : "Ingeniera de Software - Curaleaf International"}
  </h1>
  <p className="m-4 text-xl font-medium">
{lang === 'en' ? "July 2024 - Current" : "Julio 2024 - Actualidad"}
  </p>
  <div className="text-left font-light text-md md:text-lg lg:text-xl">
<p>{lang === 'en' ? '- Full-stack software engineering role working with Python, Quart, Typescript and MUI across multiple internal systems' : "- Desarrolladora de software Full-stack trabajando con Python, Quart, Typescript y MUI en diversos sistemas internos"}</p>
<p>{lang === 'en' ? '- Integrated two core systems by developing an API and background worker, ensuring that all data is consistent with the primary source of truth' : '- Integración de dos sistemas principales mediante el desarrollo de una API y un Background Worker, garantizando que todos los datos sean consistentes con la fuente primaria de verdad'}</p>
<p>{lang === 'en' ? "- Led fundamental structural changes in the pharmacy system to support sub-products, aligning its architecture conceptually with the changes I previously introduced in the formulary system" : "- Gestión de cambios estructurales fundamentales en el sistema de farmacia de la compañía, para soportar subproductos, alineando su arquitectura con los cambios que previamente introduje en el sistema de formularios"}</p>
<p>{lang === 'en' ? "- I continuously implement new features, work closely with pharmacy stakeholders to gather requirements, and proactively fix bugs to ensure system reliability" : "- Implementación continua de nuevas funcionalidades, trabajo junto a los stakeholders del equipo de Farmacia para recopilar requisitos y solución proactiva de bugs para asegurar la fiabilidad del sistema"}</p>
  </div>
    </section>

    <section className="bg-gray-200 border-2 border-orange-400 rounded-xl p-6">
<h1 className="mb-4 font-semibold text-2xl">
  {lang === 'en' ? "Software Developer Trainee- Northcoders Bootcamp" : "Desarrolladora de Software Training- Bootcamp Northcoders"}
  </h1>
  <p className="mb-4 text-xl font-medium">
{lang === 'en' ? "April 2024 - July 2024" : "Abril 2024 - Julio 2024"}
  </p>
  <div className="text-left font-light text-md md:text-lg lg:text-xl">
<p>{lang === 'en' ? "- Accredited Software Development Bootcamp teaching  React, JavaScript fundamentals, PSQL and Express.js" : "- Bootcamp acreditado de Desarrollo de Software con React, fundamentos de JavaScript, PSQL y Express.js"}</p>
<p>{lang === 'en' ? "- Designed and programmed two solo full-stack JS/React project, and a group full-stack Python & React Native project" : "- Diseño y programación de dos proyectos individuales Full-stack JS/React, y un proyecto grupal Full-stack Python y React Native"}</p>
<p>{lang === 'en' ? "-  Experience working with RESTful APIs" : "- Experiencia trabajando con RESTful APIs"}</p>
<p>{lang === 'en' ? "- Worked using TDD practices" : "- Trabajo siguiendo prácticas de TDD"}</p>
  </div>
    </section>
</div>

    <aside className="col-span-1 flex flex-col h-full p-6 lg:p-16">
 <div className="bg-gray-200 border-2 border-purple-400 rounded-xl p-2 flex-1">
      <h2 className="font-semibold text-2xl mb-4">{lang === 'en' ? "Certificates" : "Certificaciones"}</h2>
  <div className="flex flex-col space-y-2 overflow-auto p-2">
  <img alt="Northcoders bootcamp certificate" className="w-full max-w-[200px] self-center object-contain h-auto" src="/assets/NC-Alex-Straton-certificate-1.png"/>
   <img alt= "FreeCodeCamp Responsive Web Design certificate" className="w-full max-w-[200px] self-center object-contain h-auto" src="/assets/FreeCodeCamp.png"/>
     <img alt="Udemy Complete javaScript Certificate" className="w-full max-w-[200px] self-center object-contain h-auto" src="/assets/JavascriptCert.jpg"/>
 </div>
  </div>
      </aside>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-6">
<section >
  <div className="p-8 text-2xl flex flex-col bg-gray-200 border-2 border-blue-500 m-2 md:m-4 lg:m-8 rounded-xl ">
  <h2 className="text-md md:text-lg lg:text-xl mb-4">{lang === 'en' ? "Languages Spoken" : "Idiomas"}</h2>
    <div className="space-y-2 font-light text-base md:text-lg">
      <p>{lang === 'en' ? "English - Native" : "Ingles - Nativo"}</p>
      <p>{lang === 'en' ? "Spanish - Native" : "Castellano - Nativo"}</p>
    <p>{lang === 'en' ? "Romanian - Native" : "Rumano - Nativo"}</p>
      <p>{lang === 'en' ? "French - Advanced" : "Frances - Avanzado"}</p>
      <p>{lang === 'en' ? "Portuguese - Advanced" : "Portugues - Avanzado"}</p>
    </div>
  </div>
</section>

<aside>
  <div className="p-8 text-2xl flex flex-col bg-gray-200 border-2 border-cyan-400 m-2 md:m-4 lg:m-8 rounded-xl ">
    {lang === 'en' ? "Education" : "Educacion"}
    <span className="m-4 font-light text-base text-md md:text-lg lg:text-xl">
   {lang === 'en' ? "Postgraduate Cert. in Education(PGCE) with Qualified Teacher Status (QTS) University of Sussex 2014-2015" : "Educacion Postgrado (PGCE) con Titulo de Profesora Certificada (QTS) Universidad de Sussex 2014-2015"}
  </span>
<span className="m-4 font-light text-base text-md md:text-lg lg:text-xl">
  {lang === 'en' ? "Modern Languages (French, Spanish and Italian) University of Hull (2005-2009)" : "Lenguas Modernas (Frances, Castellano e Italiano) Universidad de Hull (2005-2009)"}
  </span>
  </div>
</aside>
      </div>
      <Footer/>
  </>
}

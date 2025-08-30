import Footer from "../components/Footer"
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";


const translations = {
  en: {
    title: "Junior Software Developer",
    about: ["I am a Junior full-stack developer with one year of experience in a product company specializing in Python, TypeScript, React, and PostgreSQL.",
<br />,
   " As a former linguist with a background in primary education, my journey into tech has been fueled by excellent communication, teamwork, empathy, and creativity; skills I bring to every project.",
<br />,
      " I am passionate about problem solving and have a strong flair for design and styling.",
<br />,
"In my current role, I help develop and integrate internal systems, add new features, and collaborate with UX/UI designers to create user interface components that enhance user experience and drive innovation in the pharmaceutical industry."]
  },
  sp: {
    title: "Desarrolladora de Software Junior",
    about: ["Soy una Full-Stack Junior Developer con un año de experiencia en empresa final, especializada en Python, TypeScript, React y PostgreSQL.",
<br />,
"Como ex lingüista y traductora con experiencia también como profesora en educación primaria, mi experiencia en IT ha sido impulsada por mis habilidades de comunicación, trabajo en equipo, empatía y creatividad; habilidades que actualmente traslado a cada uno de mis proyectos.",
<br />,
"Soy una apasionada de la resolución de problemas y tengo una gran intuición para el diseño y el 'styling'.",
<br />,
"En mi rol actual, trabajo desarrollando e integrando sistemas internos, añadiendo nuevas funcionalidades, y colaborando con los diseñadores UX/UI para crear componentes de interfaces de usuario que mejoran la experiencia del mismo y colaboran al desarrollo y a la innovación en la industria farmacéutica."
],
  }
};
export default function AboutMe() {
  const { lang } = useContext(LangThemeContext);
  const translatedText = translations[lang] || translations.en;

  return <>
<div className="flex flex-col min-h-screen w-full">
 <main className="flex-grow">
  <h1 className="flex flex-col justify-start items-start mt-28 mb-8 ml-12 text-5xl text-gray-900 md:text-6xl lg:text-7xl">
    <span className=" font-light bg-clip-text text-black">Alexandra </span>
        <span className="ml-8 font-light bg-clip-text text-black">Tincu Straton</span>
    <span className="ml-16 m-8 lg:m-12 font-light bg-clip-text text-black">{translatedText.title} </span>
    </h1>
<h2 className="mb-12 text-3xl font-extralight text-gray-900 md:text-4xl lg:text-5xl">{}</h2>
<div className="flex flex-col lg:flex-row">
    <img className="rounded-xl h-auto w-2/3 sm:w-1/2 lg:w-1/4 md:ml-8 lg:ml-8 mx-auto" src="/assets/Me.png" alt="a girl wearing a red, long sleeved jumper and glasses facing sideways working on her laptop with a big screen behind her, both screens show colourful faded code">
    </img>
    <p className="m-6 flex-col text-lg sm:text-md md:text-xl lg:text-2xl tracking-wider text-left leading-none font-3333">
{translatedText.about.map((paragraph) => <p>{paragraph}</p>)}
    </p>
</div>
 </main>
</div>
<Footer />
  </>

}

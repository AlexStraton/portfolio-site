import Footer from "../components/Footer"
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";


const translations = {
  en: {
    title: "Junior Software Developer",
    about: `A linguist with a background in primary education, I am now a junior full-stack developer specializing in Python, TypeScript, React, and PostgreSQL with a strong focus on problem solving and a flare for design and styling.

I am currently in my first junior role developing and integrating the company's internal systems, as well as adding new features and working with UX/UI designers to implement user interface components and features that improve the user experience.`,
  },
  sp: {

    title: "Desarrolladora de Software Junior",
    about: `Lingüista con experiencia en educación primaria, ahora soy una desarrolladora full-stack junior especializada en Python, TypeScript, React y PostgreSQL, con un fuerte enfoque en la resolución de problemas y un toque para el diseño y el estilo.

Actualmente estoy en mi primer puesto junior desarrollando e integrando los sistemas internos de la empresa, así como añadiendo nuevas funcionalidades y trabajando con diseñadores UX/UI para implementar componentes y características que mejoran la experiencia del usuario.`,
  }
};
export default function AboutMe() {
  const { lang } = useContext(LangThemeContext);
  const translatedText = translations[lang] || translations.en;
  
  return <>
<div className="flex flex-col min-h-screen w-full">
 <main className="flex-grow">
  <h1 className="flex flex-col justify-start items-start mt-24 mb-8 ml-12 text-5xl text-gray-900 md:text-6xl lg:text-7xl">
    <span className=" font-light bg-clip-text text-black">Alexandra </span>
        <span className="ml-8 font-light bg-clip-text text-black">Tincu Straton</span>
    <span className="ml-16 font-light bg-clip-text text-black">{translatedText.title} </span>
    </h1>
<h2 className="mb-12 text-3xl font-extralight text-gray-900 md:text-4xl lg:text-5xl">{}</h2>

<div className="flex flex-col md:flex-row">
    <img className="rounded-xl h-auto w-2/3 sm:w-1/2 md:w-1/4 md:ml-8 lg:ml-8 mx-auto" src="src/assets/Me.png" alt="a girl wearing a red, long sleeved jumper and glasses facing sideways working on her laptop with a big screen behind her, both screens show colourful faded code">
    </img>
    <p className="m-8 flex-col  tracking-wider text-left leading-none">
{translatedText.about}
    </p>
</div>
 </main>
</div>
<Footer />
  </>

}

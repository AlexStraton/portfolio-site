import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";


const translations = {
  en: {
    hostedSite: "Hosted Site",
    travelAppDescript: "English travel app decription",
    shoppingCartDescript: "English shopping cart description",
    grandHotelDescript: "English grand hotel description",
    newsAppDescript: "English news app description",
    sportMeetsDescript: "English sport meets description",
    videoDemo: "Video Demo",
    groupVideoPresentation: "Group video presentation"
  },
  sp: {
    hostedSite: "Sitio Web Alojado",
    travelAppDescript: "Descripcion en español de la app de viajes",
      shoppingCartDescript: "Descripción en español del carrito de compras",
      grandHotelDescript: "Descripción en español del gran hotel",
      newsAppDescript: "Descripción en español de la aplicación de noticias",
      sportMeetsDescript: "Descripción en español de encuentros deportivos",
      videoDemo: "Video Demostrativo",
      groupVideoPresentation: "Presentación en video grupal"
   }
};

export default function Projects() {
 const { lang } = useContext(LangThemeContext);
const translatedText = translations[lang] || translations.en;

  return <>
  <section>
  <h1 className="mt-24 text-black text-6xl p-8 font-extralight">{lang === 'sp' && "Proyectos"}{lang === 'en' && "Projects"}</h1>
  <div className="border-4 border-orange-300 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-orange-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">Travel app</h1>
    <h2 className="text-orange-800 md:text-xl lg:text-2xl text-lg text-right m-4">NextJs | React | Vercel | PSQL | Tailwind</h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="src/assets/TravelApp.png"/>
<div className="flex items-end flex-col">
<p className="text-sm md:text-lg lg:text-xl">{translatedText.travelAppDescript}</p>
   <div className="flex gap-4 mt-4">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="https://travel-app-vert-five.vercel.app/itinerary/13">{translatedText.hostedSite}</a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AkivaKn/travel_app">
   <span className="text-3xl"><FaGithub  /></span>
   </a>
   </div>
</div>
   </div>

  </div>
  </section>

 <section>
  <div className="border-4 border-blue-300 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-blue-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">Shopping Cart</h1>
    <h2 className="text-blue-800 md:text-xl lg:text-2xl text-lg text-right m-4">React Native | PSQL | Typescript</h2>
   <div className="flex sm:flex-row flex-col items-center m-4 md:m-8">
    <img className="w-1/2 object-contain md:mb-0 md:mr-8 md:w-1/4 max-w-full sm:h-64 md:h-1/2 h-1/2" src="src/assets/ShoppingCart.png"/>
<div className="flex items-end flex-col">
<p className="px-4 text-sm sm:text-xs md:text-lg lg:text-xl mt-4">{translatedText.shoppingCartDescript}</p>
   <div className="flex gap-4 mt-4">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="https://www.youtube.com/watch?v=f2mnA_EE71k">{translatedText.videoDemo}</a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AlexStraton/shopping_cart_app">
   <span className="text-3xl"><FaGithub  /></span>
   </a>
   </div>
</div>
   </div>

  </div>
  </section>

   <section>
  <div className="border-4 border-pink-300 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-pink-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">Grand Hotel</h1>
    <h2 className="text-pink-800 md:text-xl lg:text-2xl text-lg text-right m-4">HTML | CSS | JavaScript</h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="src/assets/GrandHotel.png"/>
<div className="flex items-end flex-col">
<p className="text-md md:text-lg lg:text-xl">{translatedText.grandHotelDescript}</p>
   <div className="flex gap-4 mt-4">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="https://alexstraton.github.io/Hotel-webpage/">{translatedText.hostedSite}</a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AlexStraton/Hotel-webpage">
   <span className="text-3xl"><FaGithub  /></span>
   </a>
   </div>
</div>
   </div>

  </div>
  </section>

   <section>
  <div className="border-4 border-red-300 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-red-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">News app</h1>
    <h2 className="text-red-800 md:text-xl lg:text-2xl text-lg text-right m-4">JavaScript | React | PSQL </h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="src/assets/NCNews.png"/>
<div className="flex items-end flex-col">
<p className="text-md md:text-lg lg:text-xl">{translatedText.newsAppDescript}</p>
   <div className="flex gap-2 mt-4 items-center">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="http://localhost:5173/Projects">{translatedText.hostedSite}
   </a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AlexStraton/NC-news-front-end">
   <span className="text-3xl"><FaGithub  /></span>
   <span className="text-md"> FE </span>
   </a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AlexStraton/Nc-News-Project">
   <span className="text-3xl"><FaGithub  /></span>
   <span className="text-md"> BE </span>
   </a>
   </div>
</div>
   </div>

  </div>
  </section>

  <section>
  <div className="border-4 border-gray-400 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-gray-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">Sport Meets</h1>
    <h2 className="text-gray-800 md:text-xl lg:text-2xl text-lg text-right m-4">React Native | PSQL | Flask | Socket.io | Python</h2>
   <div className="flex sm:flex-row flex-col items-center m-4 md:m-8">
    <img className="w-1/2 object-contain md:mb-0 md:mr-8 md:w-1/4 max-w-full sm:h-64 md:h-1/2 h-1/2" src="src/assets/SportMeets.png"/>
<div className="flex items-end flex-col">
   <p className="text-md md:text-lg lg:text-xl">{translatedText.sportMeetsDescript}</p>
   <div className="flex gap-4 mt-4 items-center">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="https://www.linkedin.com/posts/alexandra-straton-2747a019b_group-project-as-our-final-project-activity-7229378065733177344-nJeV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7sr3gB5fqXzoX-TSm_QIr-1k0iuLj44Y8">{translatedText.groupVideoPresentation}</a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AFF4NN/FE-SportMeets">
   <span className="text-3xl"><FaGithub  /></span>
   <span className="text-md"> FE </span>
   </a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/messat/BE-SportMeets-Py">
   <span className="text-3xl"><FaGithub  /></span>
   <span className="text-md"> BE </span>
   </a>
    <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AGreaves99/BE-socket-io">
   <span className="text-3xl"><FaGithub  /></span>
   <span className="text-md"> Socket.io </span>
   </a>
   </div>
</div>
   </div>

  </div>
  </section>
  <Footer />
</>
}

import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";


const translations = {
  en: {
    hostedSite: "Hosted Site",
    travelAppDescript: "A travel application that allows users to search for itineraries and plan trips based on their preferences. The app helps users select destinations, filter by activities or points of interest, post their travel itineraries, leave comments, like posts and create and account/ login. This project was built post-bootcamp with a team of 4 using Agile methodologies and deployed on Vercel.",
    shoppingCartDescript: "A mobile app replicating the functionality of a shopping website, which allows users to add products to a cart, view the cart and update the quantity of contents, as well as the ability to add new products to the site. They can also checkout and confirm the total of the products in the cart for purchase. This project was built post-bootcamp within a month using pair programming.",
    grandHotelDescript: "This simple landing page is the result of a Udemy CSS course which focussed on learning Flexbox when styling. The page is fully responsive and includes a navigation bar, image gallery, and a testimonials section. I focussed purely on styling using vanilla CSS and HTML, and completed it in a week.",
    newsAppDescript: "This is a portfolio project developed as part of my training at Northcoders. It includes a React frontend and backend API hosted on Supabase. I had 5 days to complete the frontend and 4 days for the backend. The app allows users to view, post, comment on, and vote for news articles.",
    sportMeetsDescript: "Sport Meets is a mobile application completed within 10 days as the final project of the Northcoders bootcamp. The app allows users to register, login, browse events by category or location, join events, and interact through messages related to specific sports events. It has an integrated chat feature using Socket.io for real-time communication and implements secure user authentication to protect user accounts. The project was developed by a team of 5 using Agile methodologies.",
    reikiByAarti: "A simple landing page for a reiki therapist, completed in a week. The site is fully responsive and includes a calendly built in function which my friend needed for bookings. She specified the color scheme, content and general layout, and I will add more tabs and features as she requests them.",
    videoDemo: "Video Demo",
    groupVideoPresentation: "Group video presentation"
  },
  sp: {
    hostedSite: "Sitio Web Alojado",
    travelAppDescript: "Una aplicación de viajes que permite a los usuarios buscar itinerarios y viajes preplaneados en base a sus preferencias. La aplicación ayuda a los usuarios a crear una cuenta y loguearse en ella para seleccionar destinos, filtrar por actividades o puntos de interés, postear sus itinerarios de viaje, dejar 'Likes' y comentarios en los posts, etc. Este proyecto fue creado tras haber cursado mi Bootcamp, junto a un equipo de 4 personas, con uso de metodologías ágiles (Agile) y despliegue en Vercel.",
      shoppingCartDescript: "Aplicación móvil que replica la funcionalidad de una tienda online, y que permite a los usuarios añadir productos a un carro de compra, ver el carro y actualizar la cantidad de ítems a comprar, así como añadir nuevos productos para vender en el sitio web. Los usuarios también pueden hacer el 'checkout' y confirmar los productos que desean comprar. Este proyecto fue creado tras haber cursado mi Bootcamp y mediante 'pair-programming' en menos de un mes.",
      grandHotelDescript: "Esta simple landing page es el resultado de un curso de CSS que realicé en Udemy, el cual estaba focalizado en aprender Flexbox para el styling. La página es 100% 'responsive', e incluye una barra de navegación, una galería de imágenes y una sección de testimonios. Me enfoqué puramente en el styling usando Vanilla CSS y HTML. El proyecto fue completado en menos de una semana.",
      newsAppDescript: "Este es un proyecto de portfolio desarrollado como parte de mi formación en Northcoders. Incluye un Frontend en React y una API Backend alojada en Supabase. El Frontend fue completado en 5 días y el Backend en 4. La aplicación permite a los usuarios visualizar, postear, comentar y votar artículos.",
      sportMeetsDescript: "Sport Meets es una aplicación móvil (completada en 10 días) que fue el proyecto final de mi Bootcamp en Northcoders. La aplicación permite a los usuarios registrarse y loguearse, buscar eventos por categoría o ubicación, unirse a eventos, e interactuar mediante mensajes en relación a los eventos deportivos que pueden encontrar en la app. Tiene un chat integrado, usando Socket.io, para comunicación en tiempo real, y tiene implementada seguridad en la autenticación de usuario para proteger las cuentas de los usuarios. El proyecto fue desarrollado junto a un equipo de 5 personas, usando metodologías ágiles.",
      reikiByAarti: "Una simple Landing Page para una terapeuta especialista en Reiki, completado en una semana. El sitio web es 100% responsive, e incluye un Calendly construido en base a las necesidades de la terapeuta para que sus clientes puedan agendar sus sesiones. Ella especificó la gama de colores deseada, el contenido y su disposición en la página. En el futuro añadiremos más pestañas y funcionalidades en base a los deseos de la terapeuta.",
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
    <h2 className="text-orange-800 md:text-xl lg:text-2xl text-lg text-right m-4">NextJs | React | Vercel | PSQL | Tailwind | Auth.js</h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="/assets/TravelApp.png"/>
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
    <img className="w-1/2 object-contain md:mb-0 md:mr-8 md:w-1/4 max-w-full sm:h-64 md:h-1/2 h-1/2" src="/assets/ShoppingCart.png"/>
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
  <div className="border-4 border-violet-300 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-purple-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">Grand Hotel</h1>
    <h2 className="text-purple-800 md:text-xl lg:text-2xl text-lg text-right m-4">HTML | CSS | JavaScript</h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="/assets/GrandHotel.png"/>
<div className="flex items-end flex-col">
<p className="text-md md:text-lg lg:text-xl">{translatedText.grandHotelDescript}</p>
   <div className="flex gap-4 mt-4">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-violet-500 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="https://alexstraton.github.io/Hotel-webpage/">{translatedText.hostedSite}</a>
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
    <h2 className="text-red-800 md:text-xl lg:text-2xl text-lg text-right m-4">JavaScript | React | PSQL | Bootstrap</h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="/assets/NCNews.png"/>
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
    <img className="w-1/2 object-contain md:mb-0 md:mr-8 md:w-1/4 max-w-full sm:h-64 md:h-1/2 h-1/2" src="/assets/SportMeets.png"/>
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

   <section>
  <div className="border-4 border-pink-300 m-12 md:m-24 lg:m-32 rounded-xl ">
    <h1 className="text-pink-600 md:text-3xl lg:text-4xl text-2xl font-extralight p-2">Reiki by Aarti</h1>
    <h2 className="text-pink-800 md:text-xl lg:text-2xl text-lg text-right m-4">HTML | Tailwind | TypeScript | Vite</h2>
   <div className="flex flex-col md:flex-row m-4 md:m-8">
    <img className="w-full object-contain mb-4 md:mb-0 md:mr-8 md:w-1/2 max-w-full h-auto" src="/assets/ReikiByAarti.png"/>
<div className="flex items-end flex-col">
<p className="text-md md:text-lg lg:text-xl">{translatedText.reikiByAarti}</p>
   <div className="flex gap-4 mt-4">
   <a target="_blank" rel="noopener"  className="cursor-pointer bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded shadow inline-block text-sm md:text-lg lg:text-xl" href="https://reikibyaarti.netlify.app/">{translatedText.hostedSite}</a>
   <a target="_blank" rel="noopener" className="cursor-pointer" href="https://github.com/AlexStraton/Reiki_by_Aarti">
   <span className="text-3xl"><FaGithub  /></span>
   </a>
   </div>
</div>
   </div>
  </div>
  </section>
  <Footer />
</>
}

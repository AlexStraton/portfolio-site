import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LangThemeContext } from "../LangThemeContext";

const translations = {
  en: {
    thanks: "Thanks for visiting my portfolio! If you have any feedback on the site or have any enquiries, feel free to get in touch using the form below.",
    reachOut: "You can also reach out on LinkedIn if you prefer (link above).",
    name: "Full Name",
    email: "Email Address",
    subject: "Subject",
    message: "Your Message",
  },
  sp: {
    thanks: "¡Gracias por visitar mi portafolio! Si tienes algún comentario sobre la web o alguna consulta, por favor no dudes en ponerte en contacto usando el formulario disponible.",
    reachOut: "También puedes contactarme en LinkedIn si lo prefieres (enlace en la sección del pie de página).",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      subject: "Asunto",
      message: "Tu mensaje",
   }
};

export default function ContactForm() {
    const navigate = useNavigate();
    const form = useRef();
    const { lang } = useContext(LangThemeContext);
      const translatedText = translations[lang] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
const [errors, setErrors] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

useEffect(() => {
  emailjs.init("iOQgpC_oL-utgai-a");
}, []);

 const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({
      ...prev,
     [e.target.name]: "",
    }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = lang === 'sp' ? "Por favor, escribe tu nombre." : "Please type your name.";
    }
    if (!formData.email) {
      newErrors.email = lang === 'sp' ? "Por favor, escribe tu correo electrónico." : "Please type your email.";
    }
    if (!formData.subject) {
      newErrors.subject = lang === 'sp' ? "Por favor, escribe un asunto." : "Please type a subject.";
    }
    if (!formData.message) {
     newErrors.message = lang === 'sp' ? "Por favor, escribe un mensaje." : "Please type a message.";
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return;
    }

    emailjs.sendForm('contact_service', 'contact_form', form.current)
                    .then(() => {
                        alert("Message sent successfully!");
                        navigate("/About");
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            };


    return ( <>
         <section className="flex justify-center mt-4">
      <form ref={form} onSubmit={handleSubmit} action="" method="get" className="flex bg-white flex-col items-center m-8 lg:m-12 w-full max-w-lg border border-gray-300 rounded-md">
         <h1 className=" text-black text-5xl mx-auto p-8 font-extralight text-right">{lang === 'en' ? "DROP A LINE" : "Contactame"}</h1>
        <p className="font-light text-gray-600 text-center font-md m-4">
          {translatedText.thanks}
        </p>
        <p className="font-light text-gray-600 text-center font-md m-4">{translatedText.reachOut}</p>
        <div className="flex flex-col items-left w-3/4">
      <label htmlFor="name" className=" text-left font-bold">
        {translatedText.name}
      </label>
      <input
      value={formData.name}
       onChange={handleChange}
        placeholder={lang === "en" ? "Name..." : "Nombre..."}
        name="name"
        className="flex-1 border border-gray-300 px-3 py-2 rounded"
        type="text"

      />
    {!formData.name && errors.name && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.name}</p>
    )}
    </div>
     <div className="flex flex-col items-left w-3/4">
        <label htmlFor="Email" className=" text-left font-bold">{translatedText.email}</label>
        <input value={formData.email}
       onChange={handleChange} name="email" placeholder={lang === "en" ? "Email Address..." : "Correo Electronico..."}className="flex-1 border border-gray-300 px-3 py-2 rounded" type="email"  />
     {!formData.email && errors.email && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.email}</p>
    )}
     </div>
      <div className="flex flex-col items-left w-3/4">
        <label htmlFor="Subject" className="text-left font-bold">{translatedText.subject}</label>
        <input value={formData.subject}
       onChange={handleChange} name="subject" placeholder={lang === "en" ? "Subject..." : "Asunto..."} className="flex-1 border border-gray-300 px-3 py-2 rounded" type="text"  />
       {!formData.subject && errors.subject && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.subject}</p>
    )}
      </div>

       <div className="flex flex-col items-left w-3/4">
        <label placeholder={lang === "en" ? "Message" : "Tu mensaje"} htmlFor="Message" className=" text-left font-bold">{translatedText.message}</label>
        <textarea value={formData.message}
       onChange={handleChange} name="message" placeholder={lang === "en" ? "Message..." : "Tu Mensaje..."} className="flex-1 border border-gray-300 px-3 py-2 rounded" ></textarea>
 {!formData.message && errors.message && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.message}</p>
    )}
       </div>
        <input className="cursor-pointer w-1/2 border border-gray-300 bg-black px-3 py-2 text-white m-8 rounded" type="submit" value= {lang === 'en' ? "Send" : "Enviar"} />
        </form>
      </section>
           </>
    )
}


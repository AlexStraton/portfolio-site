import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
    const navigate = useNavigate();
    const form = useRef();
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
      newErrors.name = "Please type your name.";
    }
    if (!formData.email) {
      newErrors.email = "Please type your email.";
    }
    if (!formData.subject) {
      newErrors.subject = "Please type a subject.";
    }
    if (!formData.message) {
     newErrors.message = "Please type a message.";
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
         <h1 className=" text-black text-6xl mx-auto p-8 font-extralight text-right">DROP A LINE</h1>
        <p className="font-light text-gray-600 text-center font-md m-4">
          Thanks for visiting my portfolio! If you have any feedback on the site or have any enquiries, feel free to get in touch using the form below.
        </p>
        <p className="font-light text-gray-600 text-center font-md m-4">You can also reach out on LinkedIn if you prefer (link above).</p>
        <div className="flex flex-col items-left w-3/4">
      <label htmlFor="name" className=" text-left font-bold">
        Full Name
      </label>
      <input
      value={formData.name}
       onChange={handleChange}
        placeholder="Name..."
        name="name"
        className="flex-1 border border-gray-300 px-3 py-2 rounded"
        type="text"

      />
    {!formData.name && errors.name && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.name}</p>
    )}
    </div>
     <div className="flex flex-col items-left w-3/4">
        <label htmlFor="Email" className=" text-left font-bold">Email Address</label>
        <input value={formData.email}
       onChange={handleChange} name="email" placeholder="Email Address..."className="flex-1 border border-gray-300 px-3 py-2 rounded" type="email"  />
     {!formData.email && errors.email && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.email}</p>
    )}
     </div>
      <div className="flex flex-col items-left w-3/4">
        <label htmlFor="Subject" className="text-left font-bold">Subject</label>
        <input value={formData.subject}
       onChange={handleChange} name="subject" placeholder="Subject..." className="flex-1 border border-gray-300 px-3 py-2 rounded" type="text"  />
       {!formData.subject && errors.subject && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.subject}</p>
    )}
      </div>
       <div className="flex flex-col items-left w-3/4">
        <label placeholder="Message..." htmlFor="Message" className=" text-left font-bold">Your Message</label>
        <textarea value={formData.message}
       onChange={handleChange} name="message" placeholder="Message..." className="flex-1 border border-gray-300 px-3 py-2 rounded" ></textarea>
 {!formData.message && errors.message && (
      <p className="text-left text-red-500 text-sm mt-1">{errors.message}</p>
    )}
       </div>
        <input className="cursor-pointer w-1/2 border border-gray-300 bg-black px-3 py-2 text-white m-8 rounded" type="submit" value="Send" />
        </form>
      </section>
           </>
    )
}


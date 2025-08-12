import FETechStack from "../components/BETechStack";
import BETechStack from "../components/FETechStack";
import Testing from "../components/Testing";
import Other from "../components/Other";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Footer from "../components/Footer";

export default function TechStack() {
  const images = [
    {
      customSlide: <FETechStack />,
      customThumb: "https://via.placeholder.com/150?text=FE",
    },
    {
      customSlide: <BETechStack />,
      customThumb: "https://via.placeholder.com/150?text=BE",
    },
    {
      customSlide: <Testing />,
      customThumb: "https://via.placeholder.com/150?text=Testing",
    },
    {
      customSlide: <Other />,
      customThumb: "https://via.placeholder.com/150?text=Other",
    },
  ];

   const renderItem = (item) => {
    if (item.customSlide) return <div className="p-4">{item.customSlide}</div>;
    return <img src={item.original} alt="" />;
  };

   const renderThumbInner = (item) => {
    if (item.customThumb) return <img src={item.customThumb} alt="custom thumb" />;
    return <img src={item.thumbnail} alt="thumb" />;
  };

  return <>
   <main className="min-h-screen flex flex-col">
  <section className="mt-24 flex-grow">
  <h1 className="text-black text-6xl mx-auto p-8 font-extralight">Tech Stack</h1>
<div className="relative z-10">
  <ImageGallery
  items={images}
  renderItem={renderItem}
  renderThumbInner={renderThumbInner}
  showFullscreenButton={false}/>
  </div>
  </section>
  </main>
  <Footer />
  </>

}

import FETechStack from "../components/BETechStack";
import BETechStack from "../components/FETechStack";
import Testing from "../components/Testing";
import Other from "../components/Other";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

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
  <h1 className="mt-24">Tech Stack</h1>
  <ImageGallery
  items={images}
  renderItem={renderItem}
  renderThumbInner={renderThumbInner}
  showFullscreenButton={false}/>
  </>
}

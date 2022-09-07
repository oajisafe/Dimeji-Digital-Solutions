import ImageGallery from "react-image-gallery";

import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";

import thumbnail1 from "../assets/images/thumbnail/logo1.png";
import thumbnail2 from "../assets/images/thumbnail/logo2.jpg";
import thumbnail3 from "../assets/images/thumbnail/logo3.png";
import thumbnail4 from "../assets/images/thumbnail/logo4.jpg";
import thumbnail5 from "../assets/images/thumbnail/logo5.png";
import thumbnail6 from "../assets/images/thumbnail/logo6.png";

const GraphicDesigns = () => {
  const images = [
    {
      original: logo1,
      thumbnail: thumbnail1,
    },
    {
      original: logo2,
      thumbnail: thumbnail2,
    },
    {
      original: logo3,
      thumbnail: thumbnail3,
    },
    {
      original: logo4,
      thumbnail: thumbnail4,
    },
    {
      original: logo5,
      thumbnail: thumbnail5,
    },
    {
      original: logo6,
      thumbnail: thumbnail6,
    },
  ];

  return (
    <section className="h-full py-20 w-full bg-[#C0B2C4]" id="graphicDesings">
      <div className="flex justify-center pb-[4rem]">
        <h2 className="font-primary text-white text-5xl font-medium text-center">
          Graphic Designs
          <span className="block w-full h-[5px] mt-3 rounded-full bg-white"></span>
        </h2>
      </div>

      <div className="lg:w-[40%] md-w-[50%] sm:w-[70%] w-[85%] m-auto">
        <ImageGallery items={images} />
      </div>
    </section>
  );
};

export default GraphicDesigns;

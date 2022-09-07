import CAConsultantsLogo from "../assets/images/CAConsultantsLogo.png";

const Alethia = () => {
  return (
    <section className="w-full custom1080:h-screen h-full relative z-[10]">
      <div className="grid custom1080:grid-cols-customOposite grid-cols-1 h-full">
        <div className="bg-[#BFB1C4] relative flex items-center custom1080:order-1 order-2">
          <div className="bg-white shadow-md reviews font-primary custom1080:absolute relative font-medium custom1650:text-3xl text-xl  text-[#BFB1C4] p-16 custom1080:w-[120%] w-full custom1080:right-[-28%]">
            <h2>
              Dimeji reached out to me promptly. I gave him a brief description
              of what i needed updated on my website. Dimeji met with me on zoom
              to discuss the details of the request. He provided suggestions &
              listened to my needs. We created a great collaboration & I've
              received positive feedback on the webstie. Thanks for you help
              Dimeji, I will reach out soon.
            </h2>
            <p className="pt-5 font-normal">
              <span>-</span>Alethia C. MA RP
            </p>
            <p className="pt-5">Registered Psychotherapist</p>
          </div>
        </div>
        <div className="bg-[#A43942] flex justify-center items-center custom1080:order-2 order-1">
          <img src={CAConsultantsLogo} alt="" className="w-[50%]" />
        </div>
      </div>
    </section>
  );
};

export default Alethia;

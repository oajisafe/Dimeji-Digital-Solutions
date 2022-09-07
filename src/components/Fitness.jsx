import Leeshletics from "../assets/images/Leeshletics.png";

const Fitness = () => {
  return (
    <section
      className="w-full custom1080:h-screen h-full relative"
      id="reviews"
    >
      <div className="grid custom1080:grid-cols-custom grid-cols-1 h-full">
        <div className="bg-[#B6AABA] flex justify-center items-center">
          <img src={Leeshletics} alt="" className="w-[80%]" />
        </div>
        <div className="bg-[#BFB1C4] relative flex items-center">
          <div className="bg-white shadow-md reviews font-primary custom1080:absolute font-medium custom1650:text-3xl text-xl  text-[#BFB1C4] p-16 custom1080:w-[120%] w-full custom1080:left-[-28%]">
            <h2>
              Dimeji offered quick and reliable services and was able to bring
              the vision that i had for my business to life. He took my
              suggestions and made sure that the videos met my expectations. He
              was responsive, and extremely quick with the turnaround of both
              the videos and video edits. I couldn't be happier with the
              results. My business promo video is professional but still infused
              with my personality. I would highly recommend Dimeji's services
              for your business!
            </h2>
            <p className="pt-5 font-normal">
              <span>-</span>Lesshletics Fitness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitness;

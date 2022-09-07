import carla from "../assets/images/carla.png";

const Carla = () => {
  return (
    <section className="w-full custom1080:h-screen h-full relative">
      <div className="grid custom1080:grid-cols-custom grid-cols-1 h-full">
        <div className="bg-[#F0F0EF] flex justify-center items-center">
          <img src={carla} alt="" className="w-[50%]" />
        </div>
        <div className="bg-[white] relative flex items-center">
          <div className="custom1080:bg-[#F0F0EF] bg-white shadow-md reviews font-primary custom1080:absolute font-medium custom1650:text-3xl text-xl  text-[black] p-16 custom1080:w-[120%] w-full custom1080:left-[-28%]">
            <h2>
              Hi Dimeji, It was a pleasure working with you. I am very
              inexperienced with my social media platforms and you gave me the
              tools to increase my confidence and hopefully my business. I hope
              we can cross paths agian one day.
            </h2>
            <p className="pt-5 font-normal">
              <span>-</span>Carla H. SummaryOfU Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carla;

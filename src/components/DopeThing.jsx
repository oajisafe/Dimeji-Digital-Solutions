import dopeImg from "../assets/images/dopeThing.jfif";
import copyRight from "../assets/images/copyRight.jpg";
import experience from "../assets/images/experience.jfif";

const DopeThing = () => {
  return (
    <section className="w-full h-[100%] bg-[#C0B2C4]">
      <div className="flex justify-center pt-[5rem]" id="contectCreation">
        <h2 className="font-primary text-white text-5xl font-medium text-center">
          Content Creation
          <span className="block w-full h-[5px] mt-3 rounded-full bg-white"></span>
        </h2>
      </div>
      <div className="grid custom1200:grid-cols-2 grid-cols-1 gap-12 custom1200:w-[93%] md:w-[85%] w-[93%] m-auto h-full py-20">
        <div className="flex justify-center items-center">
          <img src={dopeImg} alt="dope thing" />
        </div>
        <div className="flex flex-col justify-center font-primary text-white gap-8">
          <h2 className="text-5xl font-medium">
            Hi my name's Dimeji and i create dope things!
          </h2>
          <p className="text-xl leading-[1.8]">
            Yes, I'll admit that I went a Little "Kanye" there with that heading
            but it's true. Since my first MacBook in high school, I've been
            creating videos for fun. As time progressed and with more
            experience, I've added more to my skill set.
          </p>
          <p className="text-xl leading-[1.8]">
            Specializing in creating graphic design and logo design skills
            through my own business ventures. Using my skills to create
            something that was initially in my mind continues to amaze me and
            gives me a feeling of satisfaction. That’s the type of excitement I
            aim to provide to you once we reach a final result through working
            together. Let's work together if you would like any of the
            following:
          </p>
          <ul className="flex flex-col gap-4 ml-16">
            <li className="">Graphic Desing</li>
            <li>Logo Desing</li>
            <li>Short Form Videos (Instagram Reels / Tik Tok)</li>
          </ul>
          <div>
            <button className="text-lg font-medium">Learn More</button>
          </div>
        </div>
      </div>
      <div className="grid custom1200:grid-cols-2 grid-cols-1 gap-12 custom1200:w-[93%] md:w-[85%] w-[93%] m-auto h-full py-20">
        <div
          className="flex flex-col justify-center font-primary text-white gap-8 custom1200:order-1 order-2"
          id="copyRight"
        >
          <h2 className="text-5xl font-medium">
            Cheers to getting your copy, right!
          </h2>
          <p className="text-xl leading-[1.8]">
            From an early age, I've had a passion for writing that has grown
            professionally. Let's be honest, not everyone has the time or energy
            to turn their thought into words, I will do that for you. Depending
            on what your brand needs, I can bring my skills towards:
          </p>
          <ul className="flex flex-col gap-4 ml-16">
            <li className="">Articles & Blog Posts</li>
            <li>Social Media Posts</li>
            <li>Website Copy</li>
          </ul>
        </div>
        <div className="flex justify-center items-center custom1200:order-2 order-1">
          <img src={copyRight} alt="dope thing" />
        </div>
      </div>
      <div className="flex justify-center pb-[0rem]" id="consulting">
        <h2 className="font-primary text-white text-5xl font-medium text-center">
          Consulting
          <span className="block w-full h-[5px] mt-3 rounded-full bg-white"></span>
        </h2>
      </div>
      <div className="grid custom1200:grid-cols-2 grid-cols-1 gap-12 custom1200:w-[93%] md:w-[85%] w-[93%] m-auto h-full py-20">
        <div className="flex justify-center items-center">
          <img src={experience} alt="dope thing" />
        </div>
        <div className="flex flex-col justify-center font-primary text-white gap-8">
          <h2 className="text-5xl font-medium">
            Bringing over a decade of experiences
          </h2>
          <p className="text-xl leading-[1.8]">
            I can give you guidance gained from my experiences. You will learn
            from both my successes and failures. I specialize in launching
            online businesses and developing strategies in regards to social
            media. I also help you find techniques to help locate and determine
            your target audience and reach through my extensive market research
            skills. I can also help set up or update your online business
            through my web design skills, in which I have an expertise in
            Wordpress development.
          </p>
          <p className="text-xl leading-[1.8]">
            Since elementary school, I've started businesses with the aim of
            fulfilling a need I saw in society. 2012 was when I first began
            taking this online and have launched several ventures ever since.
            With three active online businesses currently (excluding this one),
            I bring a vast array of knowledge and experience to help you with:
          </p>
          <ul className="flex flex-col gap-4 ml-16">
            <li className="">Launching an online Business</li>
            <li>Market Research</li>
            <li>Social Media Management & Strategy</li>
            <li>Website Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DopeThing;

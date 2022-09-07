import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="relative w-full h-screen p-8 flex items-center">
      <div className="absolute z-[-10] bg-banner bg-center bg-cover object-cover w-full h-full left-0 top-0 opacity-80"></div>
      <div className="overlay"></div>
      <div className="text-white capitalize font-primary font-medium flex flex-col gap-10 relative top-24">
        <h2 className="md:text-6xl sm:text-4xl text-3xl flex flex-col gap-3">
          Modern Digital solutions <span>designed for you.</span>
        </h2>
        <p className="flex items-center gap-4 md:text-4xl sm:text-2xl text-xl flex-wrap">
          <Link
            to="contectCreation"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span>Content Creation.</span>
          </Link>{" "}
          <Link
            to="copyRight"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
            className="cursor-pointer"
          >
            <span>Copywriting.</span>
          </Link>{" "}
          <Link
            to="consulting"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span>Consulting.</span>
          </Link>{" "}
        </p>
        <div>
          <a href="mailto:Damola.a.a.ajisafe@gmail.com">
            <button className="font-normal text-lg">Chat With Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;

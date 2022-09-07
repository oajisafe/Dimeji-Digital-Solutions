import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-[10rem] text-white relative">
      <div className="absolute z-[-10] bg-footer bg-cover object-cover w-full h-full left-0 top-0 brightness-[.95] footerContainer"></div>
      <div className="flex flex-col items-center font-primary gap-10 pb-14">
        <h2 className="text-center text-5xl font-bold">
          Book a 30 minutes chat
        </h2>
        <p className="text-xl text-center">
          There is no commitment, pressure, or obligations
        </p>
        <a href="mailto:Damola.a.a.ajisafe@gmail.com">
          <p>Consultation Chat</p>
        </a>
      </div>
      <div className="md:w-[80%] w-[93%] m-auto flex items-center justify-between md:flex-row gap-6 flex-col">
        <h2 className=" text-3xl font-bold text-center">
          I don't make promises, I show results
        </h2>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/dimejiajisafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-3xl " />
          </a>
          <a
            href="https://www.instagram.com/dimejiajisafe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Fragment, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Dialog, Transition } from "@headlessui/react";

import mainLogo from "../assets/images/mainLogo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  const navItems = [
    {
      name: "Logo Designs",
      link: "logoDesigns",
      offcet: -50,
    },
    {
      name: "Graphic Designs",
      link: "graphicDesings",
      offcet: -50,
    },
    {
      name: "Reviews",
      link: "reviews",
      offcet: -10,
    },
    {
      name: "About Me",
      link: "aboutMe",
      offcet: -50,
    },
    {
      name: "Services",
      link: "services",
      offcet: 30,
    },
  ];

  return (
    <>
      <header
        className={`z-[100] w-full ${
          isVisible ? "bg-[#C0B2C4] fixed" : "bg-transparent absolute"
        } duration-500`}
      >
        <div className="py-6 px-4 lgC:w-[80%] sm:w-[90%] w-[98%] m-auto">
          <div className="text-white font-popins font-semibold flex justify-between ">
            <Link to="home">
              <div className="font-courgette text-4xl cursor-pointer">
                <img src={mainLogo} alt="main logo" className="w-[10rem]" />
              </div>
            </Link>
            <div className="flex items-center">
              <div className="hidden navBreak:block">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    className="navItemDesing navItem"
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={item.offcet}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`text-white text-4xl navBreak:hidden`}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <HiMenuAlt3 className="w-[6rem] text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="nav"
          className="fixed inset-0 z-[500] flex navBreak:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white text-3xl"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <IoClose className="w-[6rem] text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 w-full justify-center px-4">
                <img src={mainLogo} alt="" className="w-[7rem]" />
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 px-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="navItemDesing text-xl navItem block mb-2"
                      activeClass="active activeMobile"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={item.offcet}
                      duration={500}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;

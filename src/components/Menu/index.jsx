import { useState, useEffect } from "react";
import LogoAmr from "../../assets/images/logo-fabio-AMR.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Menu = () => {
  const [menuHeight, setMenuHeight] = useState("h-0");
  const [display, setDisplay] = useState("hidden");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center h-20 bg-black z-100 2xl:h-48">
      <a href="index.html" className="">
        <div className="absolute translate-[-50%] top-[50%] left-[50%] h-20 w-50 overflow-x-hidden">
          <div className="absolute bg-radial from-transparent to-redf to-99% shadow-logo shadow-redf translate-[-50%] top-[50%] left-[50%] w-32 h-30 rounded-full"></div>
        </div>
        <img
          src={`${LogoAmr}`}
          alt=""
          className="absolute h-10 animate-animationAmr translate-[-50%] top-[50%] left-[50%] shadow-redf 2xl:h-20"
        />
        <span className="text-[6px] absolute animate-animationText translate-[-50%] top-[85%] left-[50%] text-white 2xl:text-[0.8rem]">
          SERVIÇOS E EMPREENDIMENTOS LTDA
        </span>
      </a>

      <nav className="flex flex-col items-end">
        {isMobile && (
          <MenuIcon
            style={{ fontSize: 30 }}
            className="text-white cursor-pointer mr-4"
            onClick={() => {
              setMenuHeight("h-36");
              setDisplay("inline");
            }}
          />
        )}
        <ul
          className={`absolute flex flex-col bg-redf items-center ${menuHeight} justify-evenly duration-300 left-0 top-20 right-0 z-20 md:flex-row md:h-20 md:bg-transparent md:top-0 2xl:top-1/2 2xl:-translate-y-1/2`}
        >
          <a
            href="#home"
            className="w-48 text-center 2xl:w-80"
            onClick={() => {
              setMenuHeight("h-0");
              setDisplay("hidden");
            }}
          >
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base 2xl:text-3xl`}
            >
              INÍCIO
            </li>
          </a>
          <a
            href="#services"
            className="w-48 text-center 2xl:w-80"
            onClick={() => {
              setMenuHeight("h-0");
              setDisplay("hidden");
            }}
          >
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base md:mr-20 2xl:text-3xl 2xl:mr-40`}
            >
              SERVIÇOS
            </li>
          </a>
          <a
            href="#about-me"
            className="w-48 text-center 2xl:w-80"
            onClick={() => {
              setMenuHeight("h-0");
              setDisplay("hidden");
            }}
          >
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base md:ml-20 2xl:text-3xl 2xl:ml-40`}
            >
              SOBRE MIM
            </li>
          </a>
          <a
            href="#contact"
            className="w-48 text-center 2xl:w-80"
            onClick={() => {
              setMenuHeight("h-0");
              setDisplay("hidden");
            }}
          >
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base 2xl:text-3xl`}
            >
              CONTATO
            </li>
          </a>
          <a
            className={`absolute right-2 top-2 ${display} cursor-pointer`}
            onClick={() => {
              setMenuHeight("h-0");
              setDisplay("hidden");
            }}
          >
            <CloseIcon className="bi bi-x-lg text-white text-xl hover:text-black" />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;

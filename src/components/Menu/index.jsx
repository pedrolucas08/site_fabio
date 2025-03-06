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
    <header className="relative flex justify-between items-center h-20 bg-black">
      <a href="index.html">
        <img
          src={`${LogoAmr}`}
          alt=""
          className="absolute h-10 animate-animationAmr translate-[-50%] top-[50%] left-[50%]"
        />
        <span className="text-[6px] absolute animate-animationText translate-[-50%] top-[85%] left-[50%] text-white">
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
          className={`absolute flex flex-col bg-redf items-center ${menuHeight} justify-evenly duration-300 left-0 top-20 right-0 z-20 md:flex-row md:h-20 md:bg-transparent md:top-0`}
        >
          <a href="#home" className="w-48 text-center">
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base`}
            >
              INÍCIO
            </li>
          </a>
          <a href="#services" className="w-48 text-center">
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base md:mr-20`}
            >
              SERVIÇOS
            </li>
          </a>
          <a href="#about-me" className="w-48 text-center">
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base md:ml-20`}
            >
              SOBRE MIM
            </li>
          </a>
          <a href="#contact" className="w-48 text-center">
            <li
              className={`cursor-pointer text-[12px] text-white hover:text-black ${display} duration-300 md:inline md:hover:text-redf md:text-base`}
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

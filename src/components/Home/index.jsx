import Menu from "../Menu";
import imagemHome from "../../assets/images/Home/imagem-home.jpg";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.home`, {
      origin: "top",
      distance: "150px",
      duration: 1000,
      delay: 150,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <>
      <Menu />

      <div id="home" className="relative bg-black h-80 sm:h-96 lg:h-124">
        <img
          src={`${imagemHome}`}
          alt="Imagem de fundo da tela inicial"
          className="h-80 object-cover absolute opacity-50 sm:w-full sm:h-full"
        />
        <div className="home absolute top-1/2 -translate-y-1/2 z-10 p-6 midsm:p-12">
          <h1 className="text-white text-xl font-bold smlst:text-2xl sm:text-3xl">
            Qualidade, Eficiência e Compromisso em Cada Serviço!{" "}
          </h1>
          <p className="text-white text-sm mt-2 mb-4 smlst:text-base sm:text-lg">
            Na AMR Serviços e Empreendimentos LTDA, trabalhamos com eficiência
            para entregar soluções seguras e bem feitas.{" "}
            <span className="font-bold">
              Entre em contato e faça seu orçamento!
            </span>
          </p>
          <button className="bg-redf cursor-pointer text-white rounded-xl py-1 px-2 hover:scale-95 duration-300 lg:text-xl">
            FAZER ORÇAMENTO
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

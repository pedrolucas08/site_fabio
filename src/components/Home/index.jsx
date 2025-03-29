import Menu from "../Menu";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import reflorestamento8 from "../../assets/reflorestamento/image8.jpg";
import talude0 from "../../assets/roçagem-talude-barragem/image0.jpg";
import servidao1 from "../../assets/faixa-servidao/image1.jpg";

const abrirWhatsapp = (mensagem) => {
  window.open(`https://wa.me/5562999144771?text=${mensagem}`, "_blank");
};

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

  const imagesHome = [reflorestamento8, talude0, servidao1];

  let mensagem = `Olá, AMR Serviços e Empreendimentos!%0AGostaria de solicitar um orçamento.%0APoderiam me passar mais informações?%0A%0AObrigado!`;

  return (
    <>
      <Menu />

      <div
        id="home"
        className="relative mt-20 bg-black h-96 smlst:h-124 midsm:h-160 2xl:h-280 2xl:h-360"
      >
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            arrows: false,
            pagination: false,
          }}
          aria-label="Fabio images"
        >
          {imagesHome.map((image, index) => (
            <SplideSlide
              key={index}
              className={"h-96 smlst:h-124 midsm:h-160 2xl:h-280 2xl:h-360"}
            >
              <img
                className="object-cover absolute opacity-50 w-full h-full"
                src={`${image}`}
                alt={`Imagem ${index + 1} do Slider`}
              />
            </SplideSlide>
          ))}
        </Splide>
        <div className="home absolute top-1/2 -translate-y-1/2 z-10 p-6 midsm:p-12 2xl:-translate-y-[60%] 2xl:w-360 2xl:left-1/2 2xl:-translate-x-1/2">
          <h1 className="text-white text-xl font-bold smlst:text-2xl sm:text-3xl lg:text-5xl 2xl:text-7xl 2xl:mb-12">
            Qualidade, Eficiência e Compromisso em Cada Serviço!{" "}
          </h1>
          <p className="text-white text-sm mt-2 mb-4 smlst:text-base sm:text-lg lg:text-2xl 2xl:text-4xl 2xl:mb-8">
            Na AMR Serviços e Empreendimentos LTDA, trabalhamos com eficiência
            para entregar soluções seguras e bem feitas.{" "}
            <span className="font-bold">
              Entre em contato e faça seu orçamento!
            </span>
          </p>
          <button
            className="bg-redf cursor-pointer text-white rounded-xl py-1 px-2 hover:scale-95 duration-300 lg:text-2xl lg:py-2 lg:px-4 2xl:py-6 2xl:px-12 2xl:text-4xl"
            onClick={() => abrirWhatsapp(mensagem)}
          >
            FAZER ORÇAMENTO
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

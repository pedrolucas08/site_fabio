import React, { useState, useEffect } from "react";
import SliderServices from "../SliderServices";
import "../SliderServices/slider.css";
import ScrollReveal from "scrollreveal";

import talude0 from "../../assets/roçagem-talude-barragem/image0.jpg";
import reflorestamento0 from "../../assets/reflorestamento/image0.jpg";
import servidao0 from "../../assets/faixa-servidao/image0.jpg";
import construcao0 from "../../assets/construcao/image0.jpg";

const Services = () => {
  const [card, setCard] = useState(0);
  const [scale, setScale] = useState("scale-0");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    for (let i = 0; i <= 4; i++) {
      ScrollReveal().reveal(`.services${i}`, {
        scale: 0.7,
        duration: 1000,
        delay: 150,
        easing: "ease-in-out",
        reset: false,
      });
    }

    ScrollReveal().reveal(".services-title", {
      origin: "left",
      distance: "150px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
    ScrollReveal().reveal(".services-subtitle", {
      origin: "right",
      distance: "150px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <>
      <div id="services">
        <h2 className="services-title text-2xl text-center mt-12 mb-4 font-bold sm:text-3xl 2xl:text-5xl">
          Serviços que Oferecemos
        </h2>
        <p className="services-subtitle text-center text-gray-600 mb-8 text-sm sm:text-base 2xl:text-3xl">
          Oferecemos soluções eficientes e de qualidade para atender suas
          necessidades com profissionalismo e responsabilidade.
        </p>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <div className="services1 flex flex-col w-72 h-112 rounded-md shadow-xl 2xl:w-96 2xl:h-148">
            <img
              src={`${reflorestamento0}`}
              alt="Service"
              className="w-full h-48 object-cover rounded-t-md 2xl:h-74"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold mb-2 2xl:text-2xl">
                Reflorestamento
              </h3>
              <p className="text-gray-600 mb-4 text-center 2xl:text-xl">
                Plantio de novas árvores para recuperar áreas degradadas,
                melhorar o solo e contribuir para um meio ambiente mais
                sustentável.
              </p>
              <button
                onClick={() => {
                  setCard(0);
                  setScale("scale-100");
                  setDescricao("reflorestamento");
                }}
                className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600"
              >
                VER MAIS DETALHES
              </button>
            </div>
          </div>
          <div className="services1 flex flex-col w-72 h-112 rounded-md shadow-xl 2xl:w-96 2xl:h-148">
            <img
              src={`${servidao0}`}
              alt="Service"
              className="w-full h-48 object-cover rounded-t-md 2xl:h-74"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold mb-2 2xl:text-2xl">
                Limpeza de Faixa de Servidão
              </h3>
              <p className="text-gray-600 mb-4 text-center 2xl:text-xl">
                Roçagem das áreas sob linhas de transmissão de 134 kVA,
                garantindo segurança, acessibilidade e prevenção de
                interferências na rede elétrica.
              </p>
              <button
                onClick={() => {
                  setCard(1);
                  setScale("scale-100");
                  setDescricao("servidao");
                }}
                className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600"
              >
                VER MAIS DETALHES
              </button>
            </div>
          </div>
          <div className="services2 flex flex-col w-72 h-112 rounded-md shadow-xl 2xl:w-96 2xl:h-148">
            <img
              src={`${construcao0}`}
              alt="Service"
              className="w-full h-48 object-cover rounded-t-md 2xl:h-74"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold mb-2 2xl:text-2xl">
                Construção Civil
              </h3>
              <p className="text-gray-600 mb-4 text-center 2xl:text-xl">
                Construção de pontes, casas e outras estruturas com materiais de
                qualidade e mão de obra especializada, garantindo segurança e
                durabilidade.
              </p>
              <button
                onClick={() => {
                  setCard(2);
                  setScale("scale-100");
                  setDescricao("construcao");
                }}
                className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600"
              >
                VER MAIS DETALHES
              </button>
            </div>
          </div>
          <div className="services3 flex flex-col w-72 h-112 rounded-md shadow-xl 2xl:w-96 2xl:h-148">
            <img
              src={`${talude0}`}
              alt="Service"
              className="w-full h-48 object-cover rounded-t-md 2xl:h-74"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold mb-2 2xl:text-2xl">
                Roçagem de Taludes e Barragens
              </h3>
              <p className="text-gray-600 mb-4 text-center 2xl:text-xl">
                Manutenção eficiente de taludes e barragens, garantindo limpeza,
                prevenção de erosão e conservação do solo com segurança e
                qualidade.
              </p>
              <button
                onClick={() => {
                  setCard(3);
                  setScale("scale-100");
                  setDescricao("talude");
                }}
                className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600"
              >
                VER MAIS DETALHES
              </button>
            </div>
          </div>
          {/* <div className="services4 flex flex-col w-72 h-112 rounded-md shadow-xl">
            <img
              src={`${image}`}
              alt="Service"
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold mb-2">
                Limpeza Urbana
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Serviço de roçagem e remoção de resíduos em vias públicas e
                terrenos, mantendo a cidade mais limpa, segura e bem cuidada.
              </p>
              <button
                onClick={() => {
                  setCard(4);
                  setScale("scale-100");
                  setDescricao("limpezaUrbana");
                }}
                className="bg-redf text-white py-1 px-2 cursor-pointer rounded hover:bg-red-600"
              >
                VER MAIS DETALHES
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <SliderServices
        card={card}
        scale={scale}
        setScale={setScale}
        descricaoEscolhida={descricao}
      />
      ;
    </>
  );
};

export default Services;

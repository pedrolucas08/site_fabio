import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import CloseIcon from "@mui/icons-material/Close";

import talude0 from "../../assets/roçagem-talude-barragem/image0.jpg";
import reflorestamento1 from "../../assets/reflorestamento/image1.jpg";
import reflorestamento2 from "../../assets/reflorestamento/image2.jpg";
import reflorestamento3 from "../../assets/reflorestamento/image3.jpg";
import reflorestamento4 from "../../assets/reflorestamento/image4.jpg";
import reflorestamento5 from "../../assets/reflorestamento/image5.jpg";
import reflorestamento6 from "../../assets/reflorestamento/image6.jpg";
import reflorestamento7 from "../../assets/reflorestamento/image7.jpg";
import reflorestamento8 from "../../assets/reflorestamento/image8.jpg";
import servidao1 from "../../assets/faixa-servidao/image1.jpg";
import servidao2 from "../../assets/faixa-servidao/image2.jpg";
import servidao3 from "../../assets/faixa-servidao/image3.jpg";
import servidao4 from "../../assets/faixa-servidao/image4.jpg";
import servidao5 from "../../assets/faixa-servidao/image5.jpg";
import servidao6 from "../../assets/faixa-servidao/image6.jpg";
import servidao7 from "../../assets/faixa-servidao/image7.jpg";
import servidao8 from "../../assets/faixa-servidao/image8.jpg";
import servidao9 from "../../assets/faixa-servidao/image9.jpg";
import servidao10 from "../../assets/faixa-servidao/image10.jpg";
import servidao11 from "../../assets/faixa-servidao/image11.jpg";
import servidao12 from "../../assets/faixa-servidao/image12.jpg";
import construcao1 from "../../assets/construcao/image1.jpg";
import construcao2 from "../../assets/construcao/image2.jpg";
import construcao3 from "../../assets/construcao/image3.jpg";
import construcao4 from "../../assets/construcao/image4.jpg";
import construcao5 from "../../assets/construcao/image5.jpg";
import construcao6 from "../../assets/construcao/image6.jpg";
import construcao7 from "../../assets/construcao/image7.jpg";

const SliderServices = ({ card, scale, setScale, descricaoEscolhida }) => {
  const images = [
    [
      reflorestamento1,
      reflorestamento2,
      reflorestamento3,
      reflorestamento4,
      reflorestamento5,
      reflorestamento6,
      reflorestamento7,
      reflorestamento8,
    ],
    [
      servidao1,
      servidao2,
      servidao3,
      servidao4,
      servidao5,
      servidao6,
      servidao7,
      servidao8,
      servidao9,
      servidao10,
      servidao11,
      servidao12,
    ],
    [
      construcao1,
      construcao2,
      construcao3,
      construcao4,
      construcao5,
      construcao6,
      construcao7,
    ],
    [talude0],
    [construcao4, construcao5, construcao6, construcao7],
  ];

  const descriptions = {
    talude:
      "Garantimos a limpeza e manutenção eficiente de taludes e barragens, removendo a vegetação indesejada para evitar erosão, assoreamento e outros impactos ambientais. Utilizamos equipamentos adequados e técnicas especializadas para proporcionar um serviço seguro e de qualidade, preservando a integridade do solo e das estruturas.",
    reflorestamento:
      "Realizamos a plantação de novas árvores para recuperar áreas degradadas, melhorar a qualidade do solo e contribuir para a preservação do meio ambiente. Com técnicas adequadas e espécies selecionadas, garantimos um reflorestamento eficiente e sustentável, promovendo o equilíbrio ecológico e a revitalização da paisagem.",
    servidao:
      "Executamos a roçagem e manutenção das faixas de servidão sob as linhas de transmissão de 134 kVA, garantindo a segurança e a acessibilidade da área. A remoção da vegetação evita riscos de interferência na rede elétrica e facilita a inspeção e manutenção dos postes e cabos, sempre com técnicas adequadas e respeito ao meio ambiente.",
    construcao:
      "Realizamos obras de pequeno e médio porte, incluindo a construção de pontes, casas e outras estruturas com segurança, qualidade e eficiência. Nossa equipe utiliza materiais adequados e técnicas construtivas modernas para garantir projetos duráveis e bem executados, sempre atendendo às necessidades e expectativas dos clientes.",
    limpezaUrbana:
      "Oferecemos serviços de limpeza e manutenção de vias públicas, terrenos e espaços urbanos, garantindo um ambiente mais organizado e seguro. Com equipamentos adequados e uma equipe experiente, realizamos a remoção de resíduos, roçagem e conservação de áreas, contribuindo para o bem-estar da comunidade e a preservação do meio ambiente.",
  };

  const description = descriptions[descricaoEscolhida];

  return (
    <div
      className={`flex items-center justify-center fixed top-0 bg-blackT bottom-0 w-screen z-1000 py-12 px-2 scale-0 ${scale} duration-500 smlst:py-2`}
    >
      <div className="w-screen h-full bg-cinza rounded-xl overflow-auto max-w-[600px]">
        <div className="relative">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              arrows: true,
              pagination: true,
            }}
            aria-label="Fabio images"
          >
            {images[card].map((image, index) => (
              <SplideSlide key={index} className={"h-96"}>
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={`${image}`}
                  alt={`Imagem ${index + 1} do Slider`}
                />
              </SplideSlide>
            ))}
          </Splide>
          <p className="p-4 sx:text-xl">{description}</p>
          <CloseIcon
            onClick={() => setScale("scale-0")}
            sx={{ width: 30, height: 30 }}
            className="cursor-pointer absolute top-2 right-2 bg-blackT text-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderServices;

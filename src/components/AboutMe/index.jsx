import { useEffect } from "react";
import avatar from "../../assets/images/AboutMe/avatar.png";
import ScrollReveal from "scrollreveal";

const AboutMe = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.about-description`, {
      origin: "right",
      distance: "150px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
    ScrollReveal().reveal(`.about-avatar`, {
      origin: "left",
      distance: "150px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);
  return (
    <section
      id="about-me"
      className={`flex flex-wrap justify-center px-6 gap-8 mt-12 `}
    >
      <div className="about-avatar">
        <img src={`${avatar}`} alt="Imagem de Fábio" className="w-56 lg:w-72" />
      </div>
      <div className="about-description w-[90%] flex flex-col justify-center midsm:w-96 midlg:w-124 lg:w-160">
        <h2 className="text-3xl lg:text-4xl">Sobre Nós</h2>
        <h3 className="text-redf text-xl my-2 font-bold">
          AMR Serviços e Empreendimentos
        </h3>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl">
          A AMR Serviços e Empreendimentos LTDA nasceu com o compromisso de
          oferecer serviços de qualidade, eficiência e responsabilidade.
          Liderada por Fábio, a empresa atua com excelência em roçagem de
          taludes e barragens, reflorestamento, limpeza de faixa de servidão,
          construção civil e limpeza urbana.
        </p>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl my-2">
          Com uma equipe experiente e equipamentos adequados, garantimos
          soluções seguras e bem executadas para cada projeto. Nosso foco é
          atender as necessidades dos clientes com profissionalismo,
          pontualidade e respeito ao meio ambiente.
        </p>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl">
          Na AMR, trabalhamos para entregar resultados que fazem a diferença!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

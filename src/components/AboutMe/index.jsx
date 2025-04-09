import { useEffect } from "react";
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
      className={`flex flex-wrap justify-center px-6 gap-8 mt-12`}
    >
      <div className="about-description w-[90%] flex flex-col justify-center xl:w-248 2xl:w-300">
        <h2 className="text-3xl lg:text-4xl 2xl:text-6xl">Sobre Nós</h2>
        <h3 className="text-redf text-xl my-2 font-bold 2xl:text-3xl">
          AMR Serviços e Empreendimentos
        </h3>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl 2xl:text-4xl 2xl:leading-14">
          A AMR Serviços e Empreendimentos LTDA foi fundada em 2022 com o
          compromisso de oferecer serviços de qualidade, eficiência e
          responsabilidade. Liderada por Fábio, a empresa atua com excelência em
          roçagem de taludes e barragens, reflorestamento, limpeza de faixa de
          servidão, construção civil e limpeza urbana.
        </p>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl my-2 2xl:text-4xl 2xl:leading-14">
          Com uma equipe experiente e equipamentos adequados, garantimos
          soluções seguras e bem executadas para cada projeto. Nosso foco é
          atender as necessidades dos clientes com profissionalismo,
          pontualidade e respeito ao meio ambiente.
        </p>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl 2xl:text-4xl 2xl:leading-14">
          Na AMR, trabalhamos para entregar resultados que fazem a diferença!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

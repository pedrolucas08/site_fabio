import Menu from "../Menu";
import imagemHome from "../../assets/images/Home/imagem-home.jpg";

const Home = () => {
  return (
    <>
      <Menu />

      <div id="home" className="relative bg-black h-80 sm:h-96 lg:h-124">
        <img
          src={`${imagemHome}`}
          alt="Imagem de fundo da tela inicial"
          className="h-80 object-cover absolute opacity-50 sm:w-full sm:h-full"
        />
        <div className="absolute top-1/2 -translate-y-1/2 z-10 p-6 midsm:p-12">
          <h1 className="text-white text-xl font-bold smlst:text-2xl sm:text-3xl">
            Soluções Agropecuárias para sua Fazenda – Qualidade e Eficiência no
            Campo
          </h1>
          <p className="text-white text-sm mt-2 mb-4 smlst:text-base sm:text-lg">
            Oferecemos serviços especializados para o setor agropecuário,
            incluindo roçagem de pastos, venda de produtos para fazendas e muito
            mais.
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

import avatar from "../../assets/images/AboutMe/avatar.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className={`flex flex-wrap justify-center px-6 gap-8 mt-12 `}
    >
      <div className="">
        <img src={`${avatar}`} alt="Imagem de Fábio" className="w-56 lg:w-72" />
      </div>
      <div className="w-[90%] flex flex-col justify-center midsm:w-96 midlg:w-124 lg:w-160">
        <h2 className="text-3xl lg:text-4xl">Sobre Mim</h2>
        <h3 className="text-redf text-xl my-2 font-bold">Fábio - Sobrenome</h3>
        <p className="opacity-70 text-sm smlst:text-base sm:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam
          repudiandae debitis autem corporis provident atque molestiae porro
          perferendis praesentium. Tempore temporibus eaque doloribus odio
          tempora enim earum, adipisci blanditiis ea maxime ex placeat iste
          quam. Unde ad sequi deleniti.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

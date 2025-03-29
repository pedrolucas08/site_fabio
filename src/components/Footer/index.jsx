import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="text-center bg-black text-white p-4">
      <p className="text-xs 2xl:text-xl">
        AMR - SERVIÇOS E EMPREENDIMENTOS LTDA - Todos os direitos reservados -{" "}
        {date}
      </p>
    </footer>
  );
};

export default Footer;

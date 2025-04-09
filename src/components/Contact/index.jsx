import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.contact0, .contact1`, {
      origin: "right",
      distance: "900px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(`.card0, .card1, .card2`, {
      scale: "0.6",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);
  return (
    <section id="contact" className="mt-12">
      <div className="bg-black text-white px-6 py-12 opacity-80">
        <h2 className="contact0 text-2xl font-extrabold 2xl:text-5xl">
          ENTRE EM CONTATO
        </h2>
        <p className="contact1 mt-4 text-sm 2xl:text-2xl">
          Entre em contato conosco para tirar dúvidas, fazer sugestões ou
          solicitar um orçamento.
        </p>
      </div>

      <div className="flex flex-col items-center py-12 gap-8">
        <div className="card0 flex flex-col items-center w-[95%] border-2 border-gray-200 py-8 px-16 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 max-w-144 2xl:max-w-220 2xl:py-12 2xl:px-24">
          <PhoneEnabledIcon className="contact-icons" />
          <h3 className="text-2xl mb-2 2xl:text-4xl">TELEFONE</h3>
          <a
            href="tel:62999144771"
            className="hover:text-redf underline 2xl:text-2xl"
          >
            +55 (62) 9 9914-4771
          </a>
        </div>
        <div className="card1 flex flex-col items-center w-[95%] border-2 border-gray-200 py-8 px-16 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 max-w-144 2xl:max-w-220 2xl:py-12 2xl:px-24">
          <LocationOnIcon className="contact-icons" />
          <h3 className="text-2xl mb-2 2xl:text-4xl">ENDEREÇO</h3>
          <a
            href="https://www.google.com/maps?q=AMR+SERVICOS+E+EMPREENDIMENTOS+LTDA,+São+Domingos+-+GO,+73860-000"
            target="_blank"
            className="hover:text-redf text-center underline 2xl:text-2xl"
          >
            Av. Pres. Vargas, São Domingos - GO, 73860-000
          </a>
        </div>
        <div className="card2 flex flex-col items-center w-[95%] border-2 border-gray-200 py-8 px-16 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 max-w-144 2xl:max-w-220 2xl:py-12 2xl:px-24">
          <EmailIcon className="contact-icons" />
          <h3 className="text-2xl mb-2 2xl:text-4xl">EMAIL</h3>
          <a
            href="mailto:amr.emp.servicos@gmail.com"
            className="hover:text-redf underline 2xl:text-2xl"
          >
            amr.emp.servicos@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

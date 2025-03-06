import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <section className="mt-12">
      <div className="bg-black text-white px-6 py-12 opacity-80">
        <h2 className="text-2xl font-extrabold">ENTRE EM CONTATO</h2>
        <p className="mt-4 text-sm">
          Entre em contato conosco para tirar dúvidas, fazer sugestões ou
          solicitar um orçamento.
        </p>
      </div>

      <div className="flex flex-col items-center py-12 gap-8">
        <div className="flex flex-col items-center w-[95%] border-2 border-gray-200 py-8 px-16 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 max-w-144">
          <PhoneEnabledIcon />
          <h3 className="text-2xl mb-2">TELEFONE</h3>
          <a href="" className="hover:text-redf underline">
            (99) 9 9999-9999
          </a>
        </div>
        <div className="flex flex-col items-center w-[95%] border-2 border-gray-200 py-8 px-16 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 max-w-144">
          <LocationOnIcon />
          <h3 className="text-2xl mb-2">ENDEREÇO</h3>
          <a href="" className="hover:text-redf text-center underline">
            Rua tal, Quadra 93, Lote 29, Nº 24, Setor tal, São Domingos - GO
          </a>
        </div>
        <div className="flex flex-col items-center w-[95%] border-2 border-gray-200 py-8 px-16 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 max-w-144">
          <EmailIcon />
          <h3 className="text-2xl mb-2">EMAIL</h3>
          <a href="" className="hover:text-redf underline">
            teste@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { careerInterests, profile } from "../data/profile";
import { ActionLink } from "./action-link";

export const Cta = () => (
  <section
    className="container pt-[70px] pb-[222px] flex flex-col justify-center items-center"
    id="contato"
    aria-labelledby="contact-title"
  >
    <p className="mb-6 rounded-[7px] bg-[#10132E] px-4 py-2 text-center text-sm font-medium text-[#CBACF9]">
      Disponível para oportunidades Front-End
    </p>
    <h2
      id="contact-title"
      className="font-bold text-white text-4xl leading-[110%] max-w-[720px] tracking-[-2px] md:text-5xl text-center"
    >
      Vamos conversar sobre a{" "}
      <span className="text-[#CBACF9]">próxima oportunidade?</span>
    </h2>
    <p className="leading-[140%] text-[#C1C2D3] text-center mt-6 max-w-[720px]">
      Busco uma oportunidade para contribuir com interfaces bem construídas,
      colaborar com a equipe e evoluir no desenvolvimento Front-End.
    </p>
    <ul
      className="mt-6 flex max-w-[720px] flex-wrap justify-center gap-x-5 gap-y-2 text-center text-sm leading-relaxed text-[#C1C2D3]"
      aria-label="Áreas de interesse profissional"
    >
      {careerInterests.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </ul>
    <ActionLink
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-[30px] w-full md:w-[310px]"
    >
      Conversar pelo WhatsApp
    </ActionLink>
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex min-h-11 items-center text-sm text-[#C1C2D3] hover:text-white hover:underline"
    >
      Conectar no LinkedIn
    </a>
  </section>
);

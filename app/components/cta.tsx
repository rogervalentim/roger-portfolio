import { careerInterests, profile } from "../data/profile";
import { ActionLink } from "./action-link";
import { CopyEmail } from "./copy-email";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Cta = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);
  return (
  <section
    className="container pt-[70px] pb-[222px] flex flex-col justify-center items-center"
    id="contato"
    aria-labelledby="contact-title"
  >
    <p className="mb-6 rounded-[7px] bg-[#10132E] px-4 py-2 text-center text-sm font-medium text-[#CBACF9]">
      {t.contactBadge}
    </p>
    <h2
      id="contact-title"
      className="font-bold text-white text-4xl leading-[110%] max-w-[720px] tracking-[-2px] md:text-5xl text-center"
    >
      {t.contactTitle}{" "}
      <span className="text-[#CBACF9]">{t.contactHighlight}</span>
    </h2>
    <p className="leading-[140%] text-[#C1C2D3] text-center mt-6 max-w-[720px]">
      {t.contactDescription}
    </p>
    <ul
      className="mt-6 flex max-w-[720px] flex-wrap justify-center gap-x-5 gap-y-2 text-center text-sm leading-relaxed text-[#C1C2D3]"
      aria-label={locale === "en" ? "Professional interests" : "Áreas de interesse profissional"}
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
      {t.whatsapp}
    </ActionLink>
    <CopyEmail email={profile.email} className="mt-3" locale={locale} />
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex min-h-11 items-center text-sm text-[#C1C2D3] hover:text-white hover:underline"
    >
      {locale === "en" ? "Connect on LinkedIn" : "Conectar no LinkedIn"}
    </a>
  </section>
  );
};

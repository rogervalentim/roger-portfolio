import { About } from "./site/about";
import { Cta } from "./site/cta";
import { Experience } from "./site/experience";
import { Certificates } from "./site/certificates";
import { Footer } from "./site/footer";
import { Header } from "./site/header";
import { Hero } from "./site/hero";
import { Projects } from "./site/projects";
import { profileSchema } from "./lib/seo";
import type { Locale } from "./i18n";

function Page({ locale }: { locale: Locale }) {
  return (
    <div className="relative">
      <Header locale={locale} />
      <main id="conteudo" tabIndex={-1} className="pt-14">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
          />
          <Hero locale={locale} />
        </div>
        <About locale={locale} />
        <Projects locale={locale} />
        <Experience locale={locale} />
          <Certificates locale={locale} />
        <Cta locale={locale} />
      </main>
      <Footer locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}

export default function Home() {
  return <Page locale="pt" />;
}

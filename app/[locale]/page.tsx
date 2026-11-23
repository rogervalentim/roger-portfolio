import { About } from "../site/about";
import { Cta } from "../site/cta";
import { Experience } from "../site/experience";
import { Footer } from "../site/footer";
import { Header } from "../site/header";
import { Hero } from "../site/hero";
import { Projects } from "../site/projects";
import { profileSchema } from "../lib/seo";

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw === "en" ? "en" : "pt";
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

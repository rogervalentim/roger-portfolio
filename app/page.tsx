import Image from "next/image";
import { About } from "./components/about";
import { BackToTop } from "./components/back-to-top";
import { Cta } from "./components/cta";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import {
  ProductThinking,
  ProfessionalCapabilities,
  Results,
  Technologies,
  WhyHire
} from "./components/professional-sections";
import { Projects } from "./components/projects";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://roger-portfolio-gamma.vercel.app/#person",
      name: "Roger Valentim da Silva",
      url: "https://roger-portfolio-gamma.vercel.app/",
      email: "mailto:valentim.roger33@gmail.com",
      jobTitle: "Desenvolvedor Front-End",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR"
      },
      sameAs: [
        "https://github.com/rogervalentim",
        "https://www.linkedin.com/in/rogervalentim33"
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Responsive Web Design",
        "Web Performance",
        "SEO"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://roger-portfolio-gamma.vercel.app/#website",
      url: "https://roger-portfolio-gamma.vercel.app/",
      name: "Portfólio de Roger Valentim",
      inLanguage: "pt-BR",
      author: { "@id": "https://roger-portfolio-gamma.vercel.app/#person" }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <div className="grid-pattern relative w-full">
        <Image
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 -z-10 h-auto w-full md:h-[608px] md:max-w-[805px]"
          height={608}
          priority
          src="/spotlight.svg"
          width={805}
        />
        <Image
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 -z-10 h-auto w-full scale-x-[-1] md:h-[608px] md:max-w-[805px]"
          height={608}
          priority
          src="/spotlight.svg"
          width={805}
        />
        <Header />
        <Hero />
      </div>
      <main id="conteudo-principal">
        <WhyHire />
        <About />
        <Technologies />
        <Projects />
        <Results />
        <ProductThinking />
        <ProfessionalCapabilities />
        <Experience />
      </main>
      <div className="pattern">
        <Cta />
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

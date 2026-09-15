import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Specialties } from "./components/specialties";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";
import { profileSchema } from "./lib/seo";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <div className="relative isolate w-full grid-pattern pt-[114px]">
          <Image src="/spotlight.svg" width={805} height={608} alt="" aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-full h-auto md:max-w-[805px] md:h-[608px] -z-10" />
          <Image src="/spotlight.svg" width={805} height={608} alt="" aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-full h-auto md:max-w-[805px] md:h-[608px] -z-10 scale-x-[-1]" />
          <Hero />
        </div>
        <About />
        <Specialties />
        <Projects />
        <Experience />
        <div className="pattern"><Cta /></div>
      </main>
      <div className="pattern"><Footer /></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }} />
    </div>
  );
}

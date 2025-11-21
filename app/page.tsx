import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="relative w-full grid-pattern">
        <Image
          src="/spotlight.svg"
          width={0}
          height={0}
          alt="spotlight-left"
          className="absolute top-0 left-0 w-full h-auto md:max-w-[805px] md:h-[608px]  -z-10"
        />

        <Image
          src="/spotlight.svg"
          width={0}
          height={0}
          alt="spotlight-right"
          className="absolute top-0 right-0 w-full h-auto md:max-w-[805px] md:h-[608px] -z-10 scale-x-[-1]"
        />

        <Header />
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <div className="pattern">
        <Cta />
        <Footer />
      </div>
    </>
  );
}

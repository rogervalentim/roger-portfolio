import Image from "next/image";
import { activities, profile } from "../data/profile";
import { TechnologyStack } from "./technology-stack";

export const About = () => {
  return (
    <>
      <section
        className="pb-[100px] md:pb-[150px]"
        id="sobre"
        aria-labelledby="about-title"
      >
        <div className="container">
          <h2 id="about-title" className="sr-only">
            Sobre Roger Valentim
          </h2>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[30px] justify-between md:items-stretch">
            <div className="relative w-full  lg:max-h-auto lg:w-[50%] border border-[#3637496e] pl-10 pr-10 pb-[60px] rounded-[23px] flex items-end overflow-hidden">
              <Image
                src="/services.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 720px, (max-width: 1422px) 44vw, 625px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(4,7,29,1)] to-[rgba(4,7,29,0)]" />
              <p className="relative max-w-[300px] md:max-w-[393px] w-full text-white text-[20px] md:text-[32px] font-bold leading-[120%] tracking-[-1%]">
                Transformo designs em interfaces funcionais.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-6 md:gap-[30px]">
              <section
                aria-labelledby="activities-title"
                className="relative rounded-[23px] p-px bg-[linear-gradient(to_right,#3637496e,#3637497d)]"
              >
                <div className="rounded-[23px] bg-linear-to-r from-[#04071D] to-[#0C0E23] w-full p-6 md:p-10">
                  <h3
                    id="activities-title"
                    className="font-bold text-[20px] md:text-3xl text-white leading-[120%] tracking-[-1%]"
                  >
                    O que eu faço
                  </h3>
                  <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#C1C2D3]"
                      >
                        <span aria-hidden="true" className="text-[#CBACF9]">
                          ✓
                        </span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <TechnologyStack />
            </div>
          </div>

          <div className="pt-10 flex flex-col lg:flex-row gap-[30px] w-full">
            <div className="flex flex-col gap-[30px]">
              <div
                className="
    relative rounded-[23px] p-px
    bg-[linear-gradient(to_right,#3637496e,#3637497d)] 
  "
              >
                <div className="rounded-[23px]   max-w-full w-full lg:w-[351px] overflow-hidden pt-[29px] pl-7 bg-linear-to-r from-[#04071D] to-[#0C0E23]">
                  <div className="background">
                    <h3 className="text-[20px] md:text-2xl font-bold leading-[120%] tracking-[-1%] text-white">
                      Desenvolvimento Front-End com atenção ao design e à
                      experiência de uso.
                    </h3>
                    <div className="flex justify-end items-end">
                      <Image
                        src={"/section-input.svg"}
                        alt=""
                        width={176}
                        height={390}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
    relative rounded-[23px] p-px
    bg-[linear-gradient(to_right,#3637496e,#3637497d)] 
  "
              >
                <div className="rounded-[23px]  max-w-full w-full lg:w-[351px] overflow-hidden  bg-[#06091F]">
                  <div className="background-blur">
                    <div className="flex justify-center items-center flex-col gap-6 pb-[34px]">
                      <h3 className="text-[24px] pt-[26px] md:text-2xl max-w-[241px] font-bold leading-[120%] tracking-[-1%] text-white">
                        Conheça minha trajetória profissional
                      </h3>
                      <div
                        className="
    relative rounded-[7px] p-px
    bg-[linear-gradient(to_right,#3637496e,#3637497d)] w-full max-w-[197px] 
  "
                      >
                        <a
                          href={profile.resume}
                          download
                          aria-label="Baixar currículo de Roger Valentim em PDF"
                          rel="noopener noreferrer"
                          className="rounded-[7px] flex justify-center items-center gap-[5px]  bg-linear-to-r from-[#161A31] to-[#06091F] hover:bg-linear-to-r hover:from-[#1B2B6B] hover:to-[#0A0F3A]
  transition-all duration-300 max-w-[197px] h-10 w-full text-[#E4ECFF] hover:text-white leading-[120%] tracking-[-0.48px] text-sm"
                        >
                          <div>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#e4ecff"
                              viewBox="0 0 256 256"
                            >
                              <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
                            </svg>
                          </div>
                          Baixar currículo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
        relative rounded-[23px] p-px
        bg-[linear-gradient(to_right,#3637496e,#3637497d)] w-full h-auto
      "
            >
              <div className="rounded-[23px] w-full min-h-[300px] lg:h-full bg-linear-to-r from-[#04071D] to-[#0C0E23]">
                <div className="flex items-center min-h-[300px] h-full">
                  <div className="flex flex-col items-start justify-center w-[60%] shrink-0 py-7 pl-7 lg:w-[50%] lg:pl-[43px]">
                    <p className="text-[#E4ECFF] opacity-100 uppercase leading-[120%] tracking-[15%]">
                      Meu foco
                    </p>
                    <h3 className="text-[20px] md:text-[32px] text-white max-w-[311px] font-bold leading-normal md:leading-[120%] mt-4 tracking-[-1%]">
                      Interfaces com React e Next.js, do Figma ao navegador
                    </h3>
                  </div>

                  <div className="relative w-[40%] lg:w-[50%] min-h-[300px] self-stretch rounded-br-[23px] overflow-hidden">
                    <Image
                      src="/code.png"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 36vw, (max-width: 1024px) 288px, 32vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

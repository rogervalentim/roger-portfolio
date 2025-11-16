import Image from "next/image";

export const About = () => {
  return (
    <>
      <section className="pb-[150px]">
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[30px] justify-between md:items-stretch">
            <div
              className="w-full h-[400px] md:h-auto border border-[#3637496e] lg:w-[50%] pl-10 pr-10 pb-[60px]  rounded-[23px] 
  bg-[linear-gradient(to_top,rgba(4,7,29,1),rgba(4,7,29,0)),url('/services.png')]
    bg-cover bg-center bg-no-repeat flex items-end"
            >
              <h2 className="max-w-[300px] md:max-w-[393px] w-full text-white text-[20px] md:text-[32px] font-bold leading-[120%] tracking-[-1%]">
                Entrego projetos modernos, otimizados e feitos para impulsionar
                seu negócio
              </h2>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-6 md:gap-[30px]">
              <div
                className="
    relative rounded-[23px] p-px
    bg-[linear-gradient(to_right,#3637496e,#3637497d)] 
  "
              >
                <div className="rounded-[23px] bg-linear-to-r from-[#04071D] to-[#0C0E23]  w-full p-10">
                  <h2 className="font-bold text-[20px] md:text-3xl text-white leading-[120%] tracking-[-1%]">
                    Como posso ajudar seu projeto
                  </h2>
                  <ul className="mt-8 flex flex-col gap-4">
                    <li className=" leading-[120%] text-[#C1C2D3] flex gap-3 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                      </div>
                      Desenvolvimento de sites com foco em SEO
                    </li>
                    <li className=" leading-[120%] text-[#C1C2D3] flex gap-3 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path>
                        </svg>
                      </div>
                      Posicionamento orgânico nos mecanismos de busca
                    </li>
                    <li className="leading-[120%] text-[#C1C2D3] flex gap-3 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
                        </svg>
                      </div>
                      Manutenção e otimização contínua de sites
                    </li>
                    <li className=" leading-[120%] text-[#C1C2D3] flex gap-3 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path>
                        </svg>
                      </div>
                      Web design moderno e responsivo
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="
    relative rounded-[23px] p-px
    bg-[linear-gradient(to_right,#3637496e,#3637497d)]
  "
              >
                <div className="rounded-[23px] bg-linear-to-r from-[#04071D] to-[#0C0E23]  w-full p-10">
                  <p className="leading-[120%] text-[#C1C2D3]">
                    Eu estou sempre elevando meu nível.
                  </p>
                  <h2 className=" text-white text-[20px] md:text-3xl  font-bold leading-[120%] tracking-[-1%] mt-2.5">
                    Minha stack de tecnologias
                  </h2>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        HTML
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        CSS
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        JavaScript
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        TypeScript
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        PHP
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        React
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        Next
                      </p>
                    </div>
                    <div className="bg-[#10132E] h-8 p-5 flex items-center justify-center rounded-[6.97px]">
                      <p className="text-white text-sm font-semibold leading-[18.6px]">
                        Git
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                      Entusiasta de tecnologia com paixão por desenvolvimento.
                    </h3>
                    <div className="flex justify-end items-end">
                      <Image
                        src={"/section-input.svg"}
                        alt="imagem ilustrativa"
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
                    <div className="flex justify-center items-center flex-col gap-3 pb-[34px]">
                      <h3 className="text-[24px] pt-[26px] md:text-2xl max-w-[241px] font-bold leading-[120%] tracking-[-1%] text-white">
                        Você quer começar um projeto juntos?
                      </h3>
                      <div
                        className="
    relative rounded-[7px] p-px
    bg-[linear-gradient(to_right,#3637496e,#3637497d)] w-full max-w-[197px]
  "
                      >
                        <a
                          href=""
                          className="rounded-[7px] flex justify-center items-center gap-[5px]  bg-linear-to-r from-[#161A31] to-[#06091F] hover:bg-linear-to-r hover:from-[#1B2B6B] hover:to-[#0A0F3A]
  transition-all duration-300 max-w-[197px] h-10 w-full text-[#E4ECFF] hover:text-white leading-[120%] tracking-[-0.48px] text-sm"
                        >
                          <div>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.83331 4.389C2.83331 3.97639 2.99722 3.58068 3.28898 3.28892C3.58074 2.99716 3.97645 2.83325 4.38906 2.83325H9.44423C9.64853 2.83325 9.85084 2.87349 10.0396 2.95168C10.2283 3.02986 10.3998 3.14446 10.5443 3.28892C10.6888 3.43339 10.8034 3.60489 10.8816 3.79364C10.9597 3.98239 11 4.1847 11 4.389V9.44417C11 9.64847 10.9597 9.85078 10.8816 10.0395C10.8034 10.2283 10.6888 10.3998 10.5443 10.5443C10.3998 10.6887 10.2283 10.8033 10.0396 10.8815C9.85084 10.9597 9.64853 10.9999 9.44423 10.9999H4.38906C4.18476 10.9999 3.98246 10.9597 3.7937 10.8815C3.60495 10.8033 3.43345 10.6887 3.28898 10.5443C3.14452 10.3998 3.02992 10.2283 2.95174 10.0395C2.87355 9.85078 2.83331 9.64847 2.83331 9.44417V4.389Z"
                                stroke="#E4ECFF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1.09033 8.51325C0.91145 8.41127 0.762659 8.26387 0.659002 8.08596C0.555345 7.90804 0.500497 7.70591 0.5 7.5V1.66667C0.5 1.025 1.025 0.5 1.66667 0.5H7.5C7.9375 0.5 8.1755 0.724583 8.375 1.08333"
                                stroke="#E4ECFF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          Entre em contato
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
              <div className="rounded-[23px]  w-full h-[300px] lg:h-full bg-linear-to-r from-[#04071D] to-[#0C0E23]">
                <div className="flex items-center h-full background">
                  <div className="flex flex-col items-start justify-center w-full lg:w-[50%] pl-7 lg:pl-[43px]">
                    <p className="text-[#E4ECFF] opacity-100 uppercase leading-[120%] tracking-[15%]">
                      Minha Atuação Hoje
                    </p>
                    <h2 className="text-[20px] md:text-[32px] text-white max-w-[311px] font-bold leading-normal md:leading-[120%] mt-4 tracking-[-1%]">
                      Atualmente desenvolvendo landing pages modernas e de alta
                      performance
                    </h2>
                  </div>
                  <div className="bg-[url('/code.png')] bg-cover bg-center w-full lg:w-[50%] h-full rounded-br-[23px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

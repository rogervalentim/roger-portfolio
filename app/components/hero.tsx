export const Hero = () => {
  return (
    <section className="py-16  md:pt-[123px] md:pb-[156px]" id="inicio">
      <div className="container flex justify-center items-center flex-col">
        <p className="text-[rgb(228,236,255)] text-center text-[12px] md:text-[16px] uppercase tracking-[25%] leading-[120%] ">
          Construindo Interfaces Modernas e Performáticas
        </p>

        <h1 className="text-white text-center font-bold text-5xl md:text-7xl mt-5 leading-none md:leading-[100%] md:tracking-[-3.6px] w-full max-w-[938px]">
          Transformando Ideias em{" "}
          <span className="text-[#CBACF9]">
            Experiências Digitais Impactantes
          </span>
        </h1>

        <p className="text-[16px] md:text-2xl text-center leading-normal md:leading-[120%] text-[#E4ECFF] mt-[30px] max-w-[750px]">
          Olá! Sou o Roger, Desenvolvedor Front-End de São Paulo, especializado
          em criar produtos digitais modernos, rápidos e centrados no usuário.
        </p>
        <div
          className="
   border-header
   rounded-[13px] w-full md:w-[256px]
    mt-[30px] 
    "
        >
          <a
            href="https://www.github.com/rogervalentim"
            target="_blank"
            className=" w-full md:w-[256px] bg-linear-to-r from-[#161A31] to-[#06091F] hover:bg-linear-to-r hover:from-[#1B2B6B] hover:to-[#0A0F3A]
  transition-all duration-300   flex justify-center items-center rounded-[13px]  gap-2.5   h-[66px]  font-medium text-white text-[18px] leading-[120%] tracking-[-0.48px]"
            title="Veja o meu trabalho"
          >
            Veja o meu trabalho
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Cta = () => {
  return (
    <section
      className="container pt-[70px] pb-[222px]  flex flex-col justify-center items-center"
      id="contato"
    >
      <h1 className="font-bold text-white text-4xl leading-[100%] max-w-[720px] tracking-[-2px] md:text-5xl text-center">
        Pronto para levar <span className="text-[#CBACF9]">sua</span> presença
        digital para o próximo nível?
      </h1>
      <p className="font-regular leading-[140%] tracking-[-1%] text-[#C1C2D3] text-center mt-6 max-w-[720px]">
        Entre em contato comigo e vamos conversar sobre como posso impulsionar
        seus resultados com soluções personalizadas e de alta qualidade.
      </p>

      <div
        className="
   border-header
   rounded-[13px] w-full md:w-[286px]
    mt-[30px]
    "
      >
        <a
          href="https://wa.me/5511976069285"
          target="_blank"
          className=" w-full md:w-[286px] bg-linear-to-r from-[#161A31] to-[#06091F] hover:bg-linear-to-r hover:from-[#1B2B6B] hover:to-[#0A0F3A]
  transition-all duration-300   flex justify-center items-center rounded-[13px]  gap-2.5   h-[66px]  font-medium text-white text-[18px] leading-[120%] tracking-[-0.48px] "
          title="Entre em contato"
        >
          Entre em contato
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
    </section>
  );
};

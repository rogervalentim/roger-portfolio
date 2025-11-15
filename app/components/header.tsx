export const Header = () => {
  return (
    <header className="w-full container flex justify-center items-center pt-[50px]">
      <nav className="bg-linear-to-r from-[#04071D] to-[#0C0E23] border-header border w-full max-w-[451px] h-16  flex justify-center items-center">
        <ul className="flex items-center justify-between gap-8">
          <li>
            <a
              href=""
              className="font-medium text-sm md:text-[16px] text-[#C1C2D3] hover:text-white tracking-[-0.48px] leading-[110%]"
              title="Inicio"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-sm md:text-[16px] text-[#C1C2D3] hover:text-white tracking-[-0.48px] leading-[110%]"
              title="Sobre"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-sm md:text-[16px] text-[#C1C2D3] hover:text-white tracking-[-0.48px] leading-[110%]"
              title="Projetos"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-sm md:text-[16px] text-[#C1C2D3] hover:text-white tracking-[-0.48px] leading-[110%]"
              title="Contato"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

import Image from "next/image";

interface Tech {
  id: string;
  icon: React.ReactNode;
}
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: Tech[];
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  techs
}: ProjectCardProps) {
  return (
    <div
      className="
        relative rounded-[23px] p-px
        bg-[linear-gradient(to_right,#3637496e,#3637497d)]
      "
    >
      <div
        className="
          w-full h-full py-9 px-6
          bg-[linear-gradient(to_right,#04071D,#0C0E23)]
          rounded-[23px]
          flex flex-col justify-between
        "
      >
        {/* Conteúdo do topo */}
        <div>
          <div className="bg-[#13162D] overflow-hidden md:h-[330px] rounded-[14px] pt-[30px] pl-[45px] pr-[42px]">
            <Image
              src={image}
              alt={title}
              width={449}
              height={319}
              className="rotate-[-2.63deg] rounded-[10px]"
            />
          </div>

          <h2 className="text-[20px] md:text-[32px] font-bold text-white leading-9 tracking-[-2%] mt-9">
            {title}
          </h2>

          <p className="text-[#BEC1DD] text-sm mt-[18px] md:text-[20px] leading-[130%]">
            {description}
          </p>
        </div>

        {/* Rodapé alinhado */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex">
            {techs.map((tech) => (
              <div
                key={tech.id}
                className="
                  relative p-px
                  bg-[linear-gradient(to_right,#3637496e,#3637497d)] 
                  w-[50px] h-[50px] rounded-full
                "
              >
                <div className="bg-[linear-gradient(to_right,#04071D,#0C0E23)] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>

          <a
            className="font-medium text-[20px] text-[#CBACF9] leading-[120%] tracking-[0.48px] hover:underline flex items-center gap-2.5"
            href={link}
            target="_blank"
            title={`Clique aqui para ver o site ${title}`}
          >
            Ver site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#CBACF9"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { ProjectCardProps } from "../types";

export function ProjectCard({
  title,
  description,
  image,
  link,
  techs,
  badges,
  visible = true
}: ProjectCardProps) {
  return (
    <article
      aria-hidden={!visible}
      className={`group relative rounded-[23px] bg-[linear-gradient(to_right,#3637496e,#3637497d)] p-px transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(80,42,140,0.18)] ${
        visible ? "block animate-project-in" : "hidden"
      }`}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-[23px] bg-[linear-gradient(to_right,#04071D,#0C0E23)] px-6 py-9">
        <div>
          <div className="relative flex overflow-hidden rounded-[14px] bg-[#13162D] pl-[45px] pr-[42px] pt-[30px] md:h-[330px] md:items-center md:justify-center">
            <Image
              alt={`Preview do projeto ${title}`}
              className="rotate-[-2.63deg] rounded-[10px] object-contain transition duration-500 group-hover:rotate-0 group-hover:scale-[1.035]"
              height={319}
              loading="lazy"
              src={image}
              width={449}
            />
            <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 rounded-xl border border-[#36374970] bg-[#04071D]/90 p-3 opacity-100 shadow-lg backdrop-blur transition duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              {badges.map((badge) => (
                <span
                  className="rounded-md border border-[#CBACF94d] bg-[#10132E] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#E4ECFF]"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mt-9 text-[20px] font-bold leading-9 tracking-[-2%] text-white md:text-[32px]">
            {title}
          </h3>
          <p className="mt-[18px] text-sm leading-[150%] text-[#BEC1DD] md:text-[18px]">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex" aria-label={`Tecnologias utilizadas em ${title}`}>
            {techs.map((tech) => (
              <div
                className="relative h-[50px] w-[50px] rounded-full bg-[linear-gradient(to_right,#3637496e,#3637497d)] p-px transition group-hover:-translate-y-1"
                key={tech.id}
                title={tech.id}
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[linear-gradient(to_right,#04071D,#0C0E23)]">
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>

          <a
            aria-label={`Abrir o projeto ${title} em uma nova aba`}
            className="flex items-center gap-2.5 text-[18px] font-medium leading-[120%] tracking-[0.48px] text-[#CBACF9] hover:underline md:text-[20px]"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            title={`Clique aqui para ver o site ${title}`}
          >
            Ver site
            <svg aria-hidden="true" fill="#CBACF9" height="20" viewBox="0 0 256 256" width="20">
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

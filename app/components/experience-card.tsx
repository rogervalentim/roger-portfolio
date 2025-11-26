import Image from "next/image";
import { ExperienceCardProps } from "../types";

export function ExperienceCard({
  title,
  description,
  image,
  date
}: ExperienceCardProps) {
  return (
    <>
      <div
        className="
    relative rounded-[23px]
    p-px

    bg-[linear-gradient(to_right,rgba(54,55,73,0.43),rgba(54,55,73,0.49))]
    bg-origin-border
    bg-clip-border

    before:content-[''] before:absolute 
    before:top-0 
    before:inset-x-2          
    before:h-2
    before:bg-[linear-gradient(to_right,rgba(54,55,73,0.43),rgba(54,55,73,0.49))]
    before:rounded-t-[22px]       
  "
      >
        <div
          className="
       rounded-[23px] w-full 
      bg-[linear-gradient(to_right,#04071D,#0C0E23)]
      py-[35px] px-5 lg:px-[52px] lg:pt-[52px] lg:pb-[29px] h-full
    "
        >
          <div className="flex flex-col lg:flex-row  justify-center gap-[30px]">
            <div className="w-[94px] h-[87px] flex items-center justify-center shrink-0">
              <Image
                src={image}
                alt={title}
                width="94"
                height="87"
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="font-bold text-[20px] md:text-[26px] md:leading-[32.5px] tracking-[-1%] text-white">
                {title}
              </h2>
              <p className="text-sm md:text-[16px] font-medium leading-[130%] text-[#BEC1DD] mt-3">
                {date}
              </p>
              <p className=" w-full text-sm md:text-[16px] font-medium leading-[130%] text-[#BEC1DD] mt-3">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

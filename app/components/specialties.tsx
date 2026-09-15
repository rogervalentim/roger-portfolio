import { specialties } from "../data/profile";

export function Specialties() {
  return (
    <section className="container pb-[100px] md:pb-[150px]" aria-labelledby="specialties-title">
      <h2 id="specialties-title" className="text-center text-4xl font-bold leading-[100%] tracking-[-2px] text-white md:text-5xl">
        Minhas <span className="text-[#CBACF9]">especialidades</span>
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {specialties.map(({ title, description }) => (
          <div key={title} className="rounded-[23px] bg-[linear-gradient(to_right,#3637496e,#3637497d)] p-px">
            <div className="h-full rounded-[23px] bg-linear-to-r from-[#04071D] to-[#0C0E23] p-6">
              <h3 className="text-xl font-bold leading-[120%] text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C1C2D3]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

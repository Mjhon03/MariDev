import { BiLogoUpwork } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrNetwork } from "react-icons/gr";
import { ExperienceCard } from "../ExperienceCard/ExperienceCard";

// eslint-disable-next-line react/prop-types
export const Experience = ({theme}) => {
  return (
    <section className="w-[50rem] h-[36rem] flex justify-center pt-4">
      <div className="w-2/4 h-[30rem]  flex flex-col justify-between">
        <ExperienceCard title="Autonomo" date="Noviembre 2021 - Diciembre 2022" text="Desarrollé varias aplicaciones logrando mejorar mis habilidades. Mi enfoque se ha centrado en lograr la 
        escalabilidad y mejorar la calidad del código, asegurando soluciones robustas y eficientes."/>
        <ExperienceCard title="Autonomo" date="Noviembre 2021 - Diciembre 2022" text="Desarrollé varias aplicaciones logrando mejorar mis habilidades. Mi enfoque se ha centrado en lograr la 
        escalabilidad y mejorar la calidad del código, asegurando soluciones robustas y eficientes."/>
      </div>
      <div className="h-[30rem] w-[0.3rem] bg-slate-700 dark:bg-slate-50 flex flex-col justify-around items-center rounded-sm">
        <div className="w-[4rem] h-[4rem] bg-slate-700 dark:bg-slate-50 relative  rounded-full flex justify-center items-center">
          {
            theme === "dark" ? <GrNetwork size={38} color="#000"   /> :  <GrNetwork size={38} color="#f3f4f6"/>
          }
        </div>
        <div className="w-[4rem] h-[4rem] bg-slate-700 dark:bg-slate-50 relative  rounded-full flex justify-center items-center">
          {
            theme === "dark" ? <BiLogoUpwork size={38} color="#000"   /> :  <BiLogoUpwork size={38} color="#f3f4f6"/>
          }
        </div>
        <div className="w-[4rem] h-[4rem] bg-slate-700 dark:bg-slate-50 relative  rounded-full flex justify-center items-center">
          {
            theme === "dark" ? <MdOutlineWorkOutline size={38} color="#000"   /> :  <MdOutlineWorkOutline size={38} color="#f3f4f6"/>
          }
        </div>
      </div>
      <div className="w-2/4 h-[30rem]  flex justify-end items-center">
      <ExperienceCard title="Autonomo" date="Noviembre 2021 - Diciembre 2022" text="Desarrollé varias aplicaciones logrando mejorar mis habilidades. Mi enfoque se ha centrado en lograr la 
        escalabilidad y mejorar la calidad del código, asegurando soluciones robustas y eficientes."/>
      </div>
    </section>
  )
}

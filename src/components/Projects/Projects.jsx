import { IoIosStarHalf } from "react-icons/io";
import { CardProjects } from "../CardProjects/CardProjects";
// eslint-disable-next-line react/prop-types, no-unused-vars
export const Projects = ({theme}) => {
  return (
    <main id="myMain" className="w-[50rem] flex flex-col gap-8 pt-5">
      <div className="w-[58rem] h-[3rem] flex gap-4 items-end">
        <h2 className="font-bold text-2xl text-indigo-400 dark:text-gray-100">Projects </h2>
        {
          theme === "dark" ? <IoIosStarHalf size={40} color="#f3f4f6"   /> :  <IoIosStarHalf size={40} color="#818cf8"/>
        }
      </div>
        <CardProjects />
        <CardProjects />
        <CardProjects />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">

      </section>
    </main>
  )
}

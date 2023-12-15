/* eslint-disable react/prop-types */
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

export const StaticHeader = ({handleCangeTheme,theme}) => {
  return (
    <header className="h-16 flex justify-around items-center border-b border-gray-500 ">
      <div>
        {
          theme === "light" ? <img src="src\assets\BlackLogo.png" alt="logo" className="w-16 h-10" /> : <img src="src\assets\image.png" alt="logo" className="w-16 h-10" /> 
        }
        
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-4">
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Incio</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Habilidades</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Experiencia</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Proyectos</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Contacto</a>
        </div> 
        <div className="flex items-center">
          <button onClick={handleCangeTheme} >
            {
              theme === "light" ? <IoSunnySharp color="#14213d" size={25} /> : <FaMoon color="white" size={25} />
            }
          </button>
        </div>
      </div>
    </header>
  )
}
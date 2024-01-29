/* eslint-disable react/prop-types */
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

export const StaticHeader = ({handleCangeTheme,theme}) => {
  return (
    <>
    <header className=" w-full h-16 flex justify-around items-center sticky top-0 z-50 border-b-2 border-gray-700 dark:bg-opacity-80 backdrop-blur-lg ">
      <div>
        {
          theme === "light" ? <img src="src\assets\BlackLogo.png" alt="logo" className="w-16 h-10" /> : <img src="src\assets\image.png" alt="logo" className="w-12 h-7" /> 
        }
        
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-4">
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Home</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">About</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Projects</a>
          <a href="" className="text-sm px-3 py-2 hover:text-primary/90 transition-all text-primary font-semibold bg-primary/10 rounded-full dark:text-white">Contact</a>
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
  </>
  )
}
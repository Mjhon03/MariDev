/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

export const Main = ({theme}) => {
  return (
    <main className="w-[100%] h-[80%] flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="h-28">
          <h1 className="text-[5.5rem] font-roboto font-bold text-slate-700 dark:text-slate-100">Mariana Cruz</h1>
        </div>
        <div>
          <h1 className="text-[3.5rem] font-roboto text-slate-600 dark:text-slate-300">FullStack Developer</h1>
        </div>
        <div className="w-[60%]">
          <p className="text-center text-slate-500 dark:text-slate-100">Desarrollador con experiencia en aplicaciones web y móviles, con conocimientos en el desarrollo de aplicaciones escalables y mantenibles</p>
        </div>
        <div className="flex gap-5">
          <div className="relative group/tooltip">
            <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold px-4 h-10 rounded-xl border-2 border-slate-700 text-sky-600">
              <FaLinkedin color="#0284c7" size={20} /> 
              Linkedin
            </a>
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Linkedin
            </span>
          </div>
          <div className="relative group/tooltip">
              <a href="https://github.com/Mjhon03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold px-4 h-10 rounded-xl border-2 border-slate-700 text-slate-700 dark:text-slate-300">
                {
                theme === "light" ? <FaGithub color="#111827" size={20} />  : <FaGithub color="#cbd5e1" size={20} /> 
                }
                GitHub
              </a>
              <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              GitHub
              </span>
            </div>
            <div className="relative group/tooltip">
              <a href="" download="" className="flex items-center gap-3 font-bold px-4 h-10 rounded-xl border-2 border-slate-700 bg-[#6366F1] text-slate-700 dark:text-slate-100">
                <GrDocumentUser color="#f1f5f9" size={20}/>
                Donwload CV
              </a>
              <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Donwload CV
              </span>
            </div>
        </div>
      </div>
    </main>
  )
}

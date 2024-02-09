// eslint-disable-next-line react/prop-types
export const ExperienceCard = ({title, date, text}) => {
  return (
    <div className="w-[90%] h-[11rem] border-[1px] border-gray-500 rounded-sm flex justify-center items-center">
      <div className="w-[90%] h-[90%]">
        <h1 className="font-semibold text-zinc-950 dark:text-slate-300">{title}</h1>
        <h2 className="text-zinc-950 dark:text-slate-300">{date}</h2>
        <p className="leading-tight text-zinc-950 dark:text-slate-300">
        {text}
        </p>
      </div>
    </div>
  )
}

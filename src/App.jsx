import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Main } from './components/Main/Main'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { StaticHeader } from './components/StaticHeader/StaticHeader'

function App() {
  const [theme, setTheme] = useState("light")


  useEffect(() => {
    if (theme==="dark") {
      document.querySelector('html').classList.add('dark')
    }
    else{
      document.querySelector('html').classList.remove('dark')
    }
  },[theme])

  const handleCangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }
  return (
    <>
    <main className='flex flex-col items-center bg-[#f7f7f7] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] h-full'>
      <StaticHeader handleCangeTheme={handleCangeTheme} theme={theme}  />
      <Main theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
    </main>
    </>
  )
}

export default App

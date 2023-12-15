import { useState } from 'react'
import './App.css'
import { StaticHeader } from './components/staticHeader/StaticHeader'
import { useEffect } from 'react'
import { Main } from './components/Main/Main'

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
    <main className='dark:bg-primary bg-[#f7f7f7] h-screen'>
      <StaticHeader handleCangeTheme={handleCangeTheme} theme={theme}  />
      <Main theme={theme} />
    </main>
    </>
  )
}

export default App

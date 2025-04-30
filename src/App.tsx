// import { useState } from 'react'
import Controller from "./components/Controller"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center min-h-max bg-[#0f172a]">
          <h1 className="text-4xl md:text-6xl p-16 font-extrabold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient">
            ¡Hola Mundo! Soy tu amigo Moiz.
          </h1>
        </div>
        <Controller />
      </div>
    </>
  )
}

export default App

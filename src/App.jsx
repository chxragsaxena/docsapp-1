import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './componets/Background'
import Foreground from './componets/Foreground'


function App() {

  return (

  <div className='relative w-screen h-screen bg-zinc-800'>
   <Background/>
   <Foreground/>

  </div>

  )
}

export default App

import { useState } from 'react'
import './Clock.css'
import './StopWatch.css'
import Clock from './Components/Clock'
import StopWatch from './Components/StopWatch'

function App() {

  return (
    <>
      <Clock/>
      <StopWatch/>
    </>
  )
}

export default App

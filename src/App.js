import './App.css'
import BreathCounter from './components/BreathCounter'
import Stopwatch from './components/Stopwatch'
import Countdown from './components/Countdown'
import useInterval from './hooks/useInterval'
import chimeUrl from './audio/chime.mp3'
import gongUrl from './audio/gong.mp3'


import { useState } from 'react'

function App() {
  const [showWhichComponent, setShowWhichComponent] = useState('breathCounter')
  const [session, setSession] = useState(1)
  const [count, setCount] = useState(1) 
  const [countdown, setCountdown] = useState(-1)

  const [chime] = useState(new Audio(chimeUrl))
  const [gong] = useState(new Audio(gongUrl))

  const maxBreaths = 40
  const maxCountdown = 15

  // Takes care of breathCounter and next step
  useInterval(() => {      
    setCount(count + 1);  
    if (count === maxBreaths) {
      setShowWhichComponent('stopwatch')
      gong.play()
    }
  }, (count > maxBreaths) ? null : 3500); // Stops interval after maxBreaths


  // Takes care of countdown and next step
  useInterval(() => {
    setCountdown(countdown - 1)

    if ([5, 3, 1].includes(countdown)) {
      chime.play()
    }

    if (countdown === 0) {
      gong.play()
      setCount(1)
      setSession(session + 1)
      setShowWhichComponent('breathCounter')
    }
  }, (countdown < 0) ? null : 1000) //count down every second


  const showComponent = (showWhichComponent) => {
    switch (showWhichComponent) {
      case 'breathCounter': 
        return <BreathCounter count={count} setCount={setCount} maxBreaths={maxBreaths} />
      case 'stopwatch':
        return <Stopwatch setShowWhichComponent={setShowWhichComponent} setCountdown={setCountdown} maxCountdown={maxCountdown}/>
      case 'countdown':
        return <Countdown countdown={countdown}/>
      default: 
        return 'Nothing'
    }
  }


  return (
    <div className="container">
      <h1>Round {session}</h1>
      {showComponent(showWhichComponent)}
    </div>
  );
}

export default App;

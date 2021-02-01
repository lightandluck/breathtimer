import './App.css'
import BreathCounter from './components/BreathCounter'
import Stopwatch from './components/Stopwatch'
import Countdown from './components/Countdown'
import useInterval from './hooks/useInterval'

import { useState, useEffect } from 'react'

function App() {
  const [showWhichComponent, setShowWhichComponent] = useState('breathCounter')
  const [session, setSession] = useState(1)
  const [count, setCount] = useState(1) 
  const [countdown, setCountdown] = useState(-1)

  const maxBreaths = 40
  const maxCountdown = 15

  useInterval(() => {      
    setCount(count + 1);  
    if (count === maxBreaths) {
      setShowWhichComponent('stopwatch')
    }
  }, (count > maxBreaths) ? null : 3500); // Stops interval after maxBreaths

  useInterval(() => {
    setCountdown(countdown - 1)
    if (countdown === 0) {
      setCount(1)
      setSession(session + 1)
      setShowWhichComponent('breathCounter')
    }
  }, (countdown < 0) ? null : 1000)

  // useEffect(() => {
  //   setCount(1)
  //   return () => {
  //     return null
  //   }
  // }, [])

  // const showBreathCounter = () => {
  //   if (count > maxBreaths) {
  //     return null
  //   } else {
  //     return 
  //   }
  // }

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

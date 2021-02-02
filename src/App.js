import './App.css'
import BreathCounter from './components/BreathCounter'
import Stopwatch from './components/Stopwatch'
import Countdown from './components/Countdown'
import useInterval from './hooks/useInterval'
import chimeUrl from './audio/chime.mp3'
import gongUrl from './audio/gong.mp3'


import { useState } from 'react'

function App() {
  const [showWhichComponent, setShowWhichComponent] = useState('start')
  const [session, setSession] = useState(1)
  const [count, setCount] = useState(41) 
  const [countdown, setCountdown] = useState(-1)

  // create HTML audio elements we can pass around and play
  const [chime] = useState(new Audio(chimeUrl))
  const [gong] = useState(new Audio(gongUrl))

  // TODO: Add settings panel for these variables
  // TODO: Save settings in localStorage
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

    if ([4, 2].includes(countdown)) {
      chime.play()
    }

    if (countdown === 0) {
      gong.play()
      setCount(1) //resets count for breathcounter
      setSession(session + 1) // increments session
      setShowWhichComponent('breathCounter')
    }
  }, (countdown < 0) ? null : 1000) //count down every second, stops if -1 so interval doesn't go forever

  const start = () => {
    setCount(1)
    setShowWhichComponent('breathCounter')
  }

  const showComponent = (showWhichComponent) => {
    switch (showWhichComponent) {
      case 'breathCounter': 
        return <BreathCounter count={count} setCount={setCount} maxBreaths={maxBreaths} />
      case 'stopwatch':
        return <Stopwatch 
            setShowWhichComponent={setShowWhichComponent} 
            setCountdown={setCountdown} 
            maxCountdown={maxCountdown}
            chime={chime}
            gong={gong}
          />
      case 'countdown':
        return <Countdown countdown={countdown}/>
      default: 
        return <button className="btn" onClick={start}>Start</button>
    }
  }

  // TODO: Add final stats
  // TODO: Add calendar save using IndexedDB
  return (
    <div className="container">
      <h1>Round {session}</h1>
      {showComponent(showWhichComponent)}
    </div>
  );
}

export default App;

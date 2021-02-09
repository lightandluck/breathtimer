import './App.css'
import BreathCounter from './components/BreathCounter'
import Stopwatch from './components/Stopwatch'
import Countdown from './components/Countdown'
import Result from './components/Result'
import useInterval from './hooks/useInterval'
import chimeUrl from './audio/chime.mp3'
import gongUrl from './audio/gong.mp3'


import { useState } from 'react'

function App() {
  // TODO: Add settings panel for these variables
  // TODO: Save settings in localStorage
  const maxBreaths = 40
  const maxCountdown = 15

  const [showWhichComponent, setShowWhichComponent] = useState('start')
  const [session, setSession] = useState(1)
  const [breathCount, setBreathCount] = useState(maxBreaths + 1) 
  const [countdown, setCountdown] = useState(-1)
  const [results, setResults] = useState([])
  const [finished, setFinished] = useState(false)

  // create HTML audio elements we can pass around and play
  const [chime] = useState(new Audio(chimeUrl))
  const [gong] = useState(new Audio(gongUrl))

  
  // Takes care of breathCounter and next step
  useInterval(() => {      
    setBreathCount(breathCount + 1);  
    if (breathCount === maxBreaths) {
      if (!finished) {
        setShowWhichComponent('stopwatch')
        gong.play()
      }
    }
  }, (breathCount > maxBreaths) ? null : 3500); // Stops interval after maxBreaths


  // Takes care of countdown and next step
  useInterval(() => {
    setCountdown(countdown - 1)

    // Small countdown chimes to session is ending soon
    if ([4, 2].includes(countdown)) {
      chime.play()
    }

    if ((countdown === 0) && !finished) {
      gong.play()
      setBreathCount(0) //resets breathCount for breathcounter
      setSession(session + 1) // increments session
      setShowWhichComponent('breathCounter')
    }
  }, (countdown < 0) ? null : 1000) //count down every second, stops if -1 so interval doesn't go forever

  function handleStart() {
    setBreathCount(1)
    setShowWhichComponent('breathCounter')
  }

  function handleFinish() {
    setFinished(true)
    setShowWhichComponent('result')
  }

  const showComponent = (showWhichComponent) => {
    switch (showWhichComponent) {
      case 'breathCounter': 
        return <BreathCounter breathCount={breathCount} setBreathCount={setBreathCount} maxBreaths={maxBreaths} />
      case 'stopwatch':
        return <Stopwatch 
            setShowWhichComponent={setShowWhichComponent} 
            setCountdown={setCountdown} 
            maxCountdown={maxCountdown}
            chime={chime}
            gong={gong}
            setResults={setResults}
          />
      case 'countdown':
        return <Countdown countdown={countdown}/>
      case 'result':
        return <Result results={results} />
      default: 
        return <button className="btn" onClick={handleStart}>Start</button>
    }
  }

  // TODO: Add final stats
  // TODO: Add calendar save using IndexedDB
  return (
    <div className="container">
      <h1>Round {session}</h1>
      {showComponent(showWhichComponent)}
      <button className="btn" onClick={handleFinish}>Finish</button>
    </div>
  );
}

export default App;

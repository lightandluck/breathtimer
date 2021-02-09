import './BreathCounter.css'
import { Fragment } from 'react'
const BreathCounter = ({ breathCount, setBreathCount, maxBreaths }) => {
  const continueToStopwatch = () => {
    setBreathCount(maxBreaths)
  }

  return (
    <Fragment>
      <h3>Breathe</h3>
      <div className="circle breathCounter" onClick={continueToStopwatch}>
        <p className="counter">{breathCount}</p>
      </div>
    </Fragment>
  )  
}

export default BreathCounter

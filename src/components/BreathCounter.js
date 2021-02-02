import './BreathCounter.css'
import { Fragment } from 'react'
const BreathCounter = ({ count, setCount, maxBreaths }) => {
  const continueToStopwatch = () => {
    setCount(maxBreaths)
  }

  return (
    <Fragment>
      <h3>Breathe</h3>
      <div className="circle breathCounter" onClick={continueToStopwatch}>
        <p className="counter">{count}</p>
      </div>
    </Fragment>
  )  
}

export default BreathCounter

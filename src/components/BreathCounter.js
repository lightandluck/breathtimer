import './BreathCounter.css'

const BreathCounter = ({ count, setCount, maxBreaths }) => {
  const continueToStopwatch = () => {
    setCount(maxBreaths)
  }

  return (
    <div className="circle breathCounter" onClick={continueToStopwatch}>
      <p className="counter">{count}</p>
    </div>
  )  
}

export default BreathCounter

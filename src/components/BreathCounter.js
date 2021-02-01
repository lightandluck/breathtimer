import './BreathCounter.css'

const BreathCounter = ({ count }) => {
  const onClick = () => {
    console.log('hello')
  }

  return (
    <div className="bubble" onClick={onClick}>
      <p className="counter">{count}</p>
    </div>
  )  
}

export default BreathCounter

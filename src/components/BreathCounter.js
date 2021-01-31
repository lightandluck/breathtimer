import { useState } from 'react'
import './BreathCounter.css'
const BreathCounter = () => {

  const [counter, setCounter] = useState(1)

  return (
    <div className="bubble" onClick={(e) => e.target.classList.toggle('collapse')}>
      <p className="counter" onClick={(e) => e.stopPropagation()}>{counter}</p>
    </div>
  )
}

// const style = { 
//   width: '140px',
//   height: '140px',
//   background: 'lightgreen', 
//   borderRadius: '70px',
//   transition: 'width 2s, height 2s',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }

// const counterStyle = {
//   fontSize: '64px',
//   fontWeight: 'bold'
// }



export default BreathCounter

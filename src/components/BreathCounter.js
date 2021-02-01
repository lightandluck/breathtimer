import { useState, useEffect } from 'react'
import './BreathCounter.css'
const BreathCounter = () => {

  const [count, setCount] = useState(1)

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 4000);

    return () => {
      if (count > 39) {
        clearInterval(id);
      }
    }
  })

  return (
    <div className="bubble">
      <p className="counter">{count}</p>
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

import { useState } from 'react'
import './BreathCounter.css'
import useInterval from '../hooks/useInterval'

const BreathCounter = ({ maxBreaths }) => {

  const [count, setCount] = useState(1) 

  useInterval(() => {      
    setCount(count + 1);  
  }, (count > maxBreaths-1) ? null : 3500); // Stops interval after maxBreaths
    
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

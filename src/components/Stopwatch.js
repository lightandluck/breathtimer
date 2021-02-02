import { useState, Fragment } from 'react';
import useInterval from '../hooks/useInterval';
import './Stopwatch.css'

const Stopwatch = ({ gong, chime, setCountdown, setShowWhichComponent, maxCountdown }) => {

  const [timerOn, setTimerOn] = useState(true)
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState("00")
  const [minutes, setMinutes] = useState("00")

  useInterval(() => {
    setCount(count + 1)
    setSeconds(("0" + Math.floor(count % 60)).slice(-2))
    setMinutes(("0" + (Math.floor(count / 60) % 60)).slice(-2))

    if (parseInt(minutes) > 0 && parseInt(seconds) === 0) {
      gong.play()
    }
  }, timerOn ? 1000 : null)

  const showNextSteps = () => {
    setTimerOn(false)
    chime.play()
    setCountdown(maxCountdown)
    setShowWhichComponent('countdown')
  }

  return (
    <Fragment>
      <h3>Exhale and hold</h3>
      <div className="circle stopwatch" onClick={showNextSteps}>
        <p className="stopwatch-display">
          {minutes}:{seconds}
        </p>
      </div>
    </Fragment>
  )
}

export default Stopwatch;

// class StopwatchOld extends Component {
//   state = {
//     timerOn: false,
//     timerStart: 0,
//     timerTime: 0
//   };

//   stopTimer = () => {
//     this.setState({ timerOn: false });
//     clearInterval(this.timer);
//   };

//   resetTimer = () => {
//     this.setState({
//       timerStart: 0,
//       timerTime: 0
//     });
//   };

//   componentDidMount = () => {
//     this.setState({
//       timerOn: true,
//       timerTime: 0,
//       timerStart: Date.now() - this.state.timerTime
//     });
//     this.timer = setInterval(() => {
//       this.setState({
//         timerTime: Date.now() - this.state.timerStart
//       });
//     }, 1000);
//   }

//   showNextSteps = () => {
//     this.stopTimer()
//     this.props.chime.play()
//     this.props.setCountdown(this.props.maxCountdown)
//     this.props.setShowWhichComponent('countdown')
//   }

//   render() {
//     const { timerTime } = this.state;
//     let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
//     let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    
//     if (["03", "02", "01"].includes(minutes) && seconds === "00") { this.props.gong.play() }

//     return (
//       <div className="circle stopwatch" onClick={this.showNextSteps}>
//         <p className="stopwatch-display">
//           {minutes}:{seconds}
//         </p>
//       </div>
//     );
    
//   }
// }



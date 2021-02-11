import styles from "./Countdown.module.css";
import { Fragment } from 'react'

const Countdown = ({ countdown }) => {
  return (
    <Fragment>
      <h3>Inhale... exhale slowly</h3>
      <div className={`circle ${styles.countdown}`}>
        <p className={styles.countdownDisplay}>{countdown}</p>
      </div>
    </Fragment>
  )  
}

export default Countdown

// class Countdown extends Component {
//   state = {
//     timerOn: false,
//     timerStart: 0,
//     timerTime: 15000
//   };

//   componentDidMount = () => {
//     this.setState({
//       timerOn: true,
//       timerTime: this.state.timerTime,
//       timerStart: this.state.timerTime
//     });
//     this.timer = setInterval(() => {
//       const newTime = this.state.timerTime - 1000;
//       if (newTime >= 0) {
//         this.setState({
//           timerTime: newTime
//         });
//       } else {
//         clearInterval(this.timer);
//         this.setState({ timerOn: false });
//         // alert("Countdown ended");
//       }
//     }, 1000);
//   };

//   stopTimer = () => {
//     clearInterval(this.timer);
//     this.setState({ timerOn: false });
//   };
//   resetTimer = () => {
//     if (this.state.timerOn === false) {
//       this.setState({
//         timerTime: this.state.timerStart
//       });
//     }
//   };

//   // adjustTimer = input => {
//   //   const { timerTime, timerOn } = this.state;
//   //   if (!timerOn) {
//   //     if (input === "incHours" && timerTime + 3600000 < 216000000) {
//   //       this.setState({ timerTime: timerTime + 3600000 });
//   //     } else if (input === "decHours" && timerTime - 3600000 >= 0) {
//   //       this.setState({ timerTime: timerTime - 3600000 });
//   //     } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
//   //       this.setState({ timerTime: timerTime + 60000 });
//   //     } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
//   //       this.setState({ timerTime: timerTime - 60000 });
//   //     } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
//   //       this.setState({ timerTime: timerTime + 1000 });
//   //     } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
//   //       this.setState({ timerTime: timerTime - 1000 });
//   //     }
//   //   }
//   // };

//   render() {
//     const { timerTime, timerStart, timerOn } = this.state;
//     let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
//     // let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
//     // let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

//     if (this.props.showCountdown) {
//       return (
//         <div className={styles.countdown}>
//           <div className={styles.countdownDisplay}>
//             {seconds}
//           </div>
  
//           {/* {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
//             <button className="Button-start" onClick={this.startTimer}>
//               Start
//             </button>
//           )}
//           {timerOn === true && timerTime >= 1000 && (
//             <button className="Button-stop" onClick={this.stopTimer}>
//               Stop
//             </button>
//           )}
//           {timerOn === false &&
//             (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
//               <button className="Button-start" onClick={this.startTimer}>
//                 Resume
//               </button>
//             )}
  
//           {(timerOn === false || timerTime < 1000) &&
//             (timerStart !== timerTime && timerStart > 0) && (
//               <button className="Button-reset" onClick={this.resetTimer}>
//                 Reset
//               </button>
//             )} */}
//         </div>
//       );
//     } else {
//       return null
//     }
    
//   }
// }

// export default Countdown;

import "./App.css";
import { useState, Fragment } from "react";
import BreathCounter from "./components/BreathCounter";
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";
import Result from "./components/Result";
import useInterval from "./hooks/useInterval";
import chimeUrl from "./audio/chime.mp3";
import gongUrl from "./audio/gong.mp3";

function App() {
  // TODO: Add settings panel for these variables
  // TODO: Save settings in localStorage
  const maxBreaths = 40;
  const maxCountdown = 15;

  // Application state
  const [showWhichComponent, setShowWhichComponent] = useState("start");
  const [round, setRound] = useState(1);
  const [breathCount, setBreathCount] = useState(maxBreaths + 1);
  const [countdown, setCountdown] = useState(-1);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(true);

  // create HTML audio elements we can pass around and play
  const [chime] = useState(new Audio(chimeUrl));
  const [gong] = useState(new Audio(gongUrl));

  function handleStart() {
    setBreathCount(1);
    setFinished(false);
    setShowWhichComponent("breathCounter");
  }

  function handleFinish() {
    setCountdown(-1);
    setBreathCount(maxBreaths + 1)
    setFinished(true);
    setShowWhichComponent("result");
  }

  function showComponent(showWhichComponent) {
    switch (showWhichComponent) {
      case "breathCounter":
        return (
          <BreathCounter
            breathCount={breathCount}
            maxBreaths={maxBreaths}
            setBreathCount={setBreathCount}
          />
        );
      case "stopwatch":
        return (
          <Stopwatch
            setShowWhichComponent={setShowWhichComponent}
            setCountdown={setCountdown}
            maxCountdown={maxCountdown}
            chime={chime}
            gong={gong}
            setResults={setResults}
          />
        );
      case "countdown":
        return <Countdown countdown={countdown} />;
      case "result":
        return (
          <Fragment>
            <Result results={results} />
            <button className="btn" onClick={handleStart}>
              Start
            </button>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <h1>Get ready to breath</h1>
            <button className="btn" onClick={handleStart}>
              Start
            </button>
          </Fragment>
        );
    }
  }

  // Takes care of breathCounter and continuing to stopwatch
  useInterval(
    () => {
      setBreathCount(breathCount + 1); // tick up breathCounter
      if (breathCount === maxBreaths) {
        if (!finished) {
          gong.play();
          setShowWhichComponent("stopwatch");
        }
      }
    },
    breathCount > maxBreaths ? null : 3500
  ); // Stops interval after maxBreaths

  // Takes care of countdown and continuing to breathCounter
  useInterval(
    () => {
      setCountdown(countdown - 1); //tick down countdown

      // Small countdown chimes to round is ending soon
      if ([4, 2].includes(countdown)) {
        chime.play();
      }

      if (countdown === 0 && !finished) {
        gong.play();
        setBreathCount(0); //resets breathCount for breathcounter
        setRound(round + 1); // increments round
        setShowWhichComponent("breathCounter");
      }
    },
    countdown < 0 ? null : 1000
  ); //count down every second, stops if -1 so interval doesn't go forever

  // TODO: Add final stats
  // TODO: Add calendar save using IndexedDB
  return (
    <div className="container">
      {(!finished) ? <h1>Round {round}</h1> : null }
      {showComponent(showWhichComponent)}
      {(!finished) ? <button className="btn" onClick={handleFinish}>Finish</button> : null}
    </div>
  );
}

export default App;

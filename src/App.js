import './App.css'
import BreathCounter from './components/BreathCounter'
import Stopwatch from './components/Stopwatch'
import Countdown from './components/Countdown'

function App() {
  return (
    <div className="container">
      {/* <BreathCounter maxBreaths={40}/> */}
      {/* <Stopwatch /> */}
      <Countdown />
    </div>
  );
}

export default App;

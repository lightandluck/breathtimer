import './Result.css'

const Result = ({results}) => {
  // const mockElapsed = [129, 45, 55, 88, 37];
  let average;
  let averageAndElapsed;
  let stringResults;

  function getTimeString(totalSeconds) {
    let strSeconds = ("0" + Math.floor(totalSeconds % 60)).slice(-2);
    let strMinutes = ("0" + (Math.floor(totalSeconds / 60) % 60)).slice(-2);
    return `${strMinutes}:${strSeconds}`
  }

  if (results.length) {
    average = Math.floor((results.reduce((a, b) => a + b)) / results.length);
    averageAndElapsed = [average, ...results];
    stringResults = averageAndElapsed.map((value, index) => {
      return {
        round: (index === 0) ? "Average" : index,
        elapsedTimeString: getTimeString(value)
      }
    });
  } else {
    stringResults = [{
      round: "No data",
      elapsedTimeString: "0:00",
    }]
  }

  return (
    <div className="result">
      <h1>Results</h1>
      <table>
        <tbody>
          {stringResults.map((item, index) => {
            return (
              <tr key={index+item}>
                <td>{(typeof item.round === 'string') ? item.round : `Round ${item.round}`}</td>
                <td>{item.elapsedTimeString}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Result

// const mockResults = [
//   {
//     round: "Average",
//     elapsedTimeString: "1:12"
//   },
//   {
//     round: "1",
//     elapsedTimeString: "1:01"
//   },
//   {
//     round: "2",
//     elapsedTimeString: "0:35"
//   },
//   {
//     round: "3",
//     elapsedTimeString: "0:55"
//   },
//   {
//     round: "4",
//     elapsedTimeString: "1:03"
//   },
//   {
//     round: "5",
//     elapsedTimeString: "0:44"
//   }
// ]
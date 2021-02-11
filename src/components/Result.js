import './Result.css'

const Result = ({results}) => {
  return (
    <div className="result">
      <h1>Results</h1>
      {/* {results.map(item => <p>{item}</p>)} */}
      <table>
        <tr>
          <td>Average</td>  
          <td>1:04</td>
        </tr>
        <tr>
          <td>Round 1</td>
          <td>0:59</td>
        </tr>
        <tr>
          <td>Round 2</td>
          <td>1:59</td>
        </tr>
        <tr>
          <td>Round 3</td>
          <td>0:53</td>
        </tr>
        <tr>
          <td>Round 4</td>
          <td>1:29</td>
        </tr>
        <tr>
          <td>Round 5 </td>
          <td>1:59</td>
        </tr>
      </table>
    </div>
  )
}

export default Result
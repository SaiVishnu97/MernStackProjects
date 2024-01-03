import React from 'react'
import { myBox } from '..'
import '../styling/Result.css'
function Result() {

  const {answers}=React.useContext(myBox)
  const resultmarks=answers.reduce((acc,val)=>acc+(val[0]===val[1]?1:0),0)
  const percentageres=resultmarks*100/answers.length
  return (
    <div id="result-container" className="result-container">
        <h1>Quiz Result</h1>
        <p className="score">Score: <span id="score">{resultmarks}</span></p>
        <p className="percentage">Percentage: <span id="percentage">{percentageres}</span></p>
    </div>
  )
}

export default Result
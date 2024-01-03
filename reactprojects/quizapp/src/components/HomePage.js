import React, { useContext } from 'react'
import { myBox } from '..'
function HomePage() {

  const {setpage}=useContext(myBox)
  return (
    <div className="quiz-container">
        <h2>Welcome to the Quiz App!</h2>
        <p>Click the button below to start the quiz.</p>
        <button className="btn btn-primary" onClick={()=>setpage("Questions")}>Start Quiz</button>
      </div>
  )
}

export default HomePage
import React, { useContext,useEffect } from 'react'
import { myBox } from '../../index';
import { questions } from '../QuestionArea';
function Question({option,setoption}) {
    const {QuestionIndex,setpage,setQuestionIndex,answers,setanswers,setmarkedreview,markedreview}=useContext(myBox)
    useEffect(
    ()=>
      {
        setanswers(Array.from(questions,(val)=>["",val.CorrectAnswer]));
        setmarkedreview(Array.from({length:questions.length},()=>false))
      },[])
  
    function submitAnswer()
    {
      setanswers((answers)=>{answers[QuestionIndex]=[...option];console.log("From the setanswers usestate",answers[QuestionIndex]);return answers})
      setoption(["",""])
      console.log("Options Selected as of now",answers)
      if(QuestionIndex!==questions.length-1)
        setQuestionIndex((QuestionIndex)=>QuestionIndex+1)
    }
   
    const handleCheckboxChange = () => {
      // Toggle the checked status
      // Perform different actions based on the checked status
      setmarkedreview((prevstate) => {
        return prevstate.map((value, index) =>
          index === QuestionIndex ? !value : value
        );
      });
    };
    function finishbutton()
    {
      setpage("Result")
    }
    console.log("Options Selected as of now",answers)
    return (
      <div>
      <div className="quiz-container">
          <div className="question">
          <h2>{questions[QuestionIndex].Question}</h2>
          <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" id="customCheck1" checked={markedreview[QuestionIndex]} onChange={handleCheckboxChange}/>
    <label className="custom-control-label" htmlFor="customCheck1">Mark for review</label>
  </div>
        </div>
  
        <div className="options">
        <button className={`option-btn ${option[0]==="A"?"selected":""}`} onClick={()=>{setoption(["A",questions[QuestionIndex].CorrectAnswer]);console.log('Option Selected:',option);}}>{questions[QuestionIndex].Options.A}</button>
        <button className={`option-btn ${option[0]==="B"?"selected":""}`} onClick={()=>{setoption(["B",questions[QuestionIndex].CorrectAnswer]);console.log('Option Selected:',option);}}>{questions[QuestionIndex].Options.B}</button>
        <button className={`option-btn ${option[0]==="C"?"selected":""}`} onClick={()=>{setoption(["C",questions[QuestionIndex].CorrectAnswer]);console.log('Option Selected:',option);}}>{questions[QuestionIndex].Options.C}</button>
        <button className={`option-btn ${option[0]==="D"?"selected":""}`} onClick={()=>{setoption(["D",questions[QuestionIndex].CorrectAnswer]);console.log('Option Selected:',option);}}>{questions[QuestionIndex].Options.D}</button>
        </div>
  
        <button className="submit-btn" onClick={submitAnswer}>Submit Answer</button>
      </div>
      <div style={{marginLeft:"300px"}}><button className="finish-btn" onClick={finishbutton}>Finish the test</button></div>
      </div>
    )
}

export default Question
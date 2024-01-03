import React from 'react'
import { questions } from '../QuestionArea'
import '../../styling/Questionnavigation.css'
import { myBox } from '../..'
import { useContext } from 'react'
function QuestionSelect({setoption}) 
{
  const {QuestionIndex,setQuestionIndex}=useContext(myBox);
  const {answers}=useContext(myBox);
  const {markedreview}=useContext(myBox)
  function onSelectQuestion(index)
  {
    console.log("Before rendering questionselect",QuestionIndex)
    setQuestionIndex(index)
    setoption(["",""]);
    console.log("After rendering Question select",QuestionIndex)
  }
  return (
    <>
    <div className="navigation-buttons">
    {questions.map((val,index)=><div className='.navigation-button-div'><button className={`navigation-button ${(answers.length>0&&answers[index][0]==='')?'':"answer-submitted"} ${(markedreview.length>0&&markedreview[index])?"marked-review":""}`} onClick={()=>onSelectQuestion(index)}>Q{index+1}</button></div>)}
  </div>
    <div style={{marginLeft:"50px"}}>
    <div className='.navigation-button-div' style={{fontWeight:600}}><button className="navigation-button" style={{backgroundColor:"blue"}}>Q</button>:- Marked for review</div>
    <div className='.navigation-button-div' style={{fontWeight:600}}><button className="navigation-button" style={{backgroundColor:"lightgreen"}}>Q</button>:- Answered</div>
    <div className='.navigation-button-div' style={{fontWeight:600}}><button className="navigation-button">Q</button>:- Not visited</div>
    </div>
    </>
  )
}

export default React.memo(QuestionSelect)
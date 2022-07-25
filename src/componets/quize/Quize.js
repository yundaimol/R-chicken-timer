import React,{useState} from 'react'
import Ans from './Ans'
const Quize = (props) => {
    const [isSelect, setIsSelect] = useState(null);
  return (
    <div>
        {props.quize.question}
        {
            props.quize.answer.map((ans, idx)=>{
                return <Ans ans={ans} setIsSelect={setIsSelect} idx={idx} isAnswer={props.quize.isAnswer} setScore = {props.setScore} score = {props.score}/>
            })
        }
       
        {(() => {
          if (isSelect === props.quize.isAnswer) {
            
            return <p className="text-danger"style={{ fontSize: "50px" }}>O</p>
          } else if(isSelect===null) {
            return <span></span>
          }else{
            return <span className="text-primary" style={{ fontSize: "50px" }}>X</span>
          }
          
        })()}
    </div>
    
    
  )
}

export default Quize;
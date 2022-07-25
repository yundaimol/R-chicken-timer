import React from 'react'

const Ans = (props) => {
    const f = () => {
        props.setIsSelect(props.idx)
        if(props.isAnswer === props.idx){
            props.setScore(props.score+1)
        }
    }
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
        
        <button className="btn btn-outline-dark my-2" type="button" onClick={f}>{props.ans}</button>
        
    </div>
  )
}

export default Ans
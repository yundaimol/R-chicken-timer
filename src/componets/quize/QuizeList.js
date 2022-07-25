import React, {useState} from "react";
import data from "../../data/Questionlist.json";
import Quize from "./Quize";

const QuizeList = () => {
    const quizeList = data.data.quize;
    const [quizeIdx, setQuizeIdx]= useState(0);
    const [score, setScore] =useState(0);
    return (
        <div>
            <p>現在のスコアは、{score}です。</p>
        {
            quizeList.map((quize, idx)=>{
                if(quizeIdx===idx){
                    return <Quize quize={quize} score={score} setScore={setScore}/>
                }else{
                    return null
                }
            })
        }
        {
            quizeList.length === quizeIdx ?
            <div className="d-grid gap-2 col-6 mx-auto"> 
                <p>終わりです。</p>
                <button className="btn btn-primary" type="button" onClick={()=> {window.location.reload()}}>TOPに戻る。</button>
            </div>
            :

            <button className="btn btn-primary" type="button" onClick={()=> {setQuizeIdx(quizeIdx+1)}}>Next</button>
        }
        
        </div>
    )
}

export default QuizeList;
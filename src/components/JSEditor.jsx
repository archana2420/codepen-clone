import React, { useState } from 'react'

const JSEditor = ({setJsCodeToBeDisplayed}) => {
    const [jsCode,setJsCode] = useState("console.log('start coding')")
   

  return (
    <div className="card" style={{height:"18rem"}}>
        <div className="card-header text-center bg-dark-subtle">JS</div>
        <div className="card-body">
        <textarea 
        className="container-fluid border-0  "
        style={{outline:"none"}}
        onChange={(e)=>setJsCode(e.target.value)} 
        onKeyUp={()=>{
            setJsCodeToBeDisplayed(jsCode)
            
        }} 
        value={jsCode}>{jsCode}</textarea>
        </div>
    </div>
  )
}

export default JSEditor

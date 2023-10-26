import { useState } from "react"


const CSSEditor = ({setCssCodeToBeDisplayed}) => {
    const [cssCode,setCssCode] = useState("h1{color:green}\n h2{color:red} ")

  return (
    <div className="card" style={{height:"18rem"}} >
        <div className="card-header text-center bg-dark-subtle">CSS</div>
        <div className="card-body">
        <textarea 
        onChange={(e)=>setCssCode(e.target.value)} 
        onKeyUp={()=>{
            setCssCodeToBeDisplayed(cssCode)
        }} 
        className="container-fluid border-0  "
        style={{outline:"none"}}
        value={cssCode}
        >{cssCode}</textarea>
        </div>
    </div>
  )
}

export default CSSEditor

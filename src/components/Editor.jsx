import { useState } from "react"



const Editor = ({setCodeToBeDisplayed,defaultCode,title}) => {
    const [code,setCode] = useState(defaultCode)
  return (
    <div className="card " style={{height:"18rem"}}>
        <div className="card-header text-center bg-dark-subtle fw-bold">{title}</div>
        <div className="card-body bg-light rounded-3  ">
        <textarea 
        className="container-fluid border-0  "
        style={{outline:"none",backgroundColor:"inherit",resize:"none"}}
        rows={8}
        autoCorrect="off"
        autoFocus={false}
        spellCheck={false}
        onChange={(e)=>setCode(e.target.value)} 
        onKeyUp={()=>{
            setCodeToBeDisplayed(code)
        }} 
        value={code}/>
        </div>
    </div>
  )
}

export default Editor
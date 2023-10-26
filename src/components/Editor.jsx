import { useState } from "react"



const Editor = ({setCodeToBeDisplayed,defaultCode,title}) => {
    const [code,setCode] = useState(defaultCode)
  return (
    <div className="card" style={{height:"18rem"}}>
        <div className="card-header text-center bg-dark-subtle">{title}</div>
        <div className="card-body">
        <textarea 
        className="container-fluid border-0  "
        style={{outline:"none"}}
        rows={9}
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
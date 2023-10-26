import { useState } from "react"



const HTMLEditor = ({setHtmlCodeToBeDisplayed}) => {
    const [htmlCode,setHtmlCode] = useState('<h1>Hello World</h1>\n<h2>Bye</h2>')
  return (
    <div className="card" style={{height:"18rem"}}>
        <div className="card-header text-center bg-dark-subtle">HTML</div>
        <div className="card-body">
        <textarea 
        className="container-fluid border-0  "
        style={{outline:"none"}}
        onChange={(e)=>setHtmlCode(e.target.value)} 
        onKeyUp={()=>{
            setHtmlCodeToBeDisplayed(htmlCode)
        }} 
        value={htmlCode}/>
        </div>
    </div>
  )
}

export default HTMLEditor

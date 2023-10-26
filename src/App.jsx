import { useState } from "react"
import CSSEditor from "./components/CSSEditor"
import HTMLEditor from "./components/HTMLEditor"
import JSEditor from "./components/JSEditor"
import Navbar from "./components/Navbar"
import OutputScreen from "./components/OutputScreen"

function App() {
 
  const [htmlCodeToBeDisplayed,setHtmlCodeToBeDisplayed] = useState("<h1>Hello World</h1>\n<h2>Bye</h2>")
  const [cssCodeToBeDisplayed,setCssCodeToBeDisplayed] = useState("h1{color:'green'} h2{color:'red}")
  const [jsCodeToBeDisplayed,setJsCodeToBeDisplayed] = useState("console.log('start coding')")
  
  return (
    <div className="container-fluid bg-dark  " style={{height:"100vh"}}>
      <Navbar/>
      <div className="d-grid ">
        <div className="row" >
          <div className="col-lg">
            <HTMLEditor setHtmlCodeToBeDisplayed={setHtmlCodeToBeDisplayed}/>
          </div>
          <div className="col-lg">
            <CSSEditor setCssCodeToBeDisplayed={setCssCodeToBeDisplayed}/>
          </div>
          <div className="col-lg">
            <JSEditor setJsCodeToBeDisplayed={setJsCodeToBeDisplayed}/>
          </div>
        </div>
        
      </div>
      <OutputScreen 
      htmlCodeToBeDisplayed={htmlCodeToBeDisplayed}
      cssCodeToBeDisplayed={cssCodeToBeDisplayed}
      jsCodeToBeDisplayed={jsCodeToBeDisplayed}
      />
    </div>
  )
}

export default App

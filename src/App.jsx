import { useState } from "react"
import Navbar from "./components/Navbar"
import OutputScreen from "./components/OutputScreen"
import Editor from "./components/Editor"

function App() {
 
  const [htmlCodeToBeDisplayed,setHtmlCodeToBeDisplayed] = useState("<h1>Hello World</h1>\n<h2>Bye</h2>")
  const [cssCodeToBeDisplayed,setCssCodeToBeDisplayed] = useState(`h1{
    color:green;
  } 
  h2{
    color:red;
  }`)
  const [jsCodeToBeDisplayed,setJsCodeToBeDisplayed] = useState("console.log('start coding')")
 
  return (
    <div className="container-fluid bg-dark  " style={{height:"100vh"}}>
      <Navbar/>
      <div className="d-grid ">
        <div className="row" >
          <div className="col-lg">
            <Editor 
            title={"HTML"}
            defaultCode={htmlCodeToBeDisplayed}
            setCodeToBeDisplayed={setHtmlCodeToBeDisplayed} />
          </div>
          <div className="col-lg">
          <Editor 
            title={"CSS"}
            defaultCode={cssCodeToBeDisplayed}
            setCodeToBeDisplayed={setCssCodeToBeDisplayed} />
          </div>
          <div className="col-lg">
          <Editor 
            title={"JS"}
            defaultCode={jsCodeToBeDisplayed}
            setCodeToBeDisplayed={setJsCodeToBeDisplayed} />
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

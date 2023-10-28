import { useState } from "react"
import Navbar from "./components/Navbar"
import OutputScreen from "./components/OutputScreen"
import Editor from "./components/Editor"

function App() {
 
  const [htmlCodeToBeDisplayed,setHtmlCodeToBeDisplayed] = useState("<h1>Welcome to codepen clone</h1>\n<h2>Start coding right away!</h2>")
  const [cssCodeToBeDisplayed,setCssCodeToBeDisplayed] = useState(`h1{
    color:green;
  } 
  h2{
    color:red;
  }`)
  const [jsCodeToBeDisplayed,setJsCodeToBeDisplayed] = useState("console.log('start coding')")
 
  return (
    <div className="container-fluid bg-dark pb-2 " style={{height:"100%"}}>
      <Navbar/>
      <div className="d-grid  ">
        <div className="row" >
          <div className="col-lg m-sm-2">
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

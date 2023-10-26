import HTMLEditor from "./HTMLEditor"


const OutputScreen = ({htmlCodeToBeDisplayed,cssCodeToBeDisplayed,jsCodeToDisplayed}) => {
  const srcDoc = `
  <html>
    <head>
      <style>
      ${cssCodeToBeDisplayed}
      </style>
    </head>
    <body>${htmlCodeToBeDisplayed}</body>
    <script>${jsCodeToDisplayed}</script>
  </html>
  `
  console.log(jsCodeToDisplayed)
  return (
    <div className="container-fluid my-2 bg-info" style={{height:"55vh"}}>
      <div>{jsCodeToDisplayed}</div>
        {/* <iframe  srcDoc={srcDoc}  width="100%" height="100%"></iframe> */}
    </div>
  )
}

export default OutputScreen

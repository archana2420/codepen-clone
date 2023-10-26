

const OutputScreen = ({htmlCodeToBeDisplayed,cssCodeToBeDisplayed,jsCodeToBeDisplayed}) => {
  const srcDoc = `
  <html>
    <head>
      <style>
      ${cssCodeToBeDisplayed}
      </style>
    </head>
    <body>${htmlCodeToBeDisplayed}</body>
    <script>${jsCodeToBeDisplayed}</script>
  </html>
  `
  
  return (
    <div className="container-fluid my-2 bg-info" style={{height:"55vh"}}>
      
        <iframe  srcDoc={srcDoc} sandbox="allow-scripts"  width="100%" height="100%"></iframe>
    </div>
  )
}

export default OutputScreen

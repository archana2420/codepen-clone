


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
    <div className="container-fluid my-2 bg-white" style={{height:"55vh"}}>
      
        <iframe  
        srcDoc={srcDoc} 
        sandbox="allow-scripts allow-popups allow-modals"  
        width="100%" 
        height="100%">
        </iframe>
    </div>
  )
}

export default OutputScreen

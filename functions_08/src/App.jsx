import React from 'react'

const App = () => {

  function ClickedBtn(){
    console.log("button is Clicked")
  }

  function mouseEnter(){
    console.log("Mouse is Enter")
  }
  return (
    <div>
      <h1>Sana Ullah Siddiqui</h1>
      <button onClick={ClickedBtn}>Click Me</button>
      <button onDoubleClick={ClickedBtn}>Click Me</button>
      <button onMouseEnter={mouseEnter}>Click Me</button>
      <button onMouseEnter={mouseEnter} onClick={ClickedBtn}>Click Me</button>
    </div>
  )
}

export default App

import React from 'react'


const App = () => {
  function onSubmit(e){
    e.preventDefault()
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onClick={(e)=>{
        onSubmit(e)
      }}>
        <input type="text" placeholder='type here'/>
        <button>Click Now</button>
      </form>
    </div>
  )
}

export default App

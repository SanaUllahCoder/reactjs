import React,{useState} from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitForm = (e)=>{
    e.preventDefault()
    console.log("Form Submitted by", title)
    settitle('')
  }

  return (
    <div>
      <form onSubmit={(e) =>{
        submitForm(e)
      }
      }>
        <input type="text" placeholder='type here' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App

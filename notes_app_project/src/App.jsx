import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')
  const [createTask, setCreateTask] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(details)

    const copyTask = [...createTask]
    copyTask.push({ title, details })
    setCreateTask(copyTask)
    // console.log("Form Submitted");
    setTitle("")
    setDetails("")
  }

  const deleteNote = (idx) =>{
    const copyTask =[...createTask]
    copyTask.splice(idx,1)
    setCreateTask(copyTask)
  }


  return (
    <div className='bg-black lg:flex  h-screen text-white'>
      <form className='flex justify-row items-start flex-col lg:w-1/2 gap-4 p-10' onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h1 className='text-4xl font-bold'>Add Note</h1>

        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}

          type="text" placeholder='Enter Note Heading' className='border-2 w-full px-5 py-3 outline-none flex items-start rounded ' />
        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}

          placeholder='Write Details' className='border-2 h-32 w-full px-5 flex items-start py-3 outline-none rounded '></textarea>
        <button className='bg-white active:bg-red-500 text-xl w-full font-bold px-5 py-2 text-black rounded outline-none'>
          Add Note
        </button>


      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex text-black flex-wrap gap-10 mt-5 h-full overflow-auto '>

          {createTask.map((task, idx) => {

            return <div key={idx} className='flex justify-between items-start flex-col h-52 w-40 bg-cover py-6 px-4 rounded-2xl bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")] shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div>
                <h3 className='text-xl font-bold text-gray-800'>{task.title}</h3>
                <p className='mt-3 font-medium leading-tight text-gray-600'>{task.details}</p>
              </div>
              <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200' onClick={()=>{
                deleteNote(idx)
              }}>Delete Note</button>
            </div>
          })}



        </div>
      </div>

    </div>
  )
}

export default App

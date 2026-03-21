import React from 'react'

const App = () => {

  

  
  const user = {
    fullName: "Sana Ullah Siddiqui",
    age: 19,
    favouriteThing : 'Learning'
  }
  localStorage.setItem('user',JSON.stringify (user))

  const getUser = JSON.parse(localStorage.getItem('user'))
  console.log(getUser)


  return (
    <div>
      
    </div>
  )
}

export default App

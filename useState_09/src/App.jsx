import React, {useState} from 'react'
import Counter from './counter_project/Counter'
import Array from './arrary_usestate/array'
const App = () => {
  const [first, setfirst] = useState('Siddiqui')
  const [age, setNum] =  useState("click now on btn")
  function changeAge(){
    setNum(19)
  }
  return (
    <div>

      <h1>My Name is Sana Ullah {first}. I am {age} years old</h1>
      <button onClick={changeAge}>Click Now</button>
      <Counter />
      <Array />
    </div>
  )
}

export default App

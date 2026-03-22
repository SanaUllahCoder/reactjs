import {useState, useEffect, use} from "react"

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log("use effect is running")
  }, [a])
  
  
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(50)

  // useEffect(function() {
  //   console.log("use effect is running...")
  // },[num])
  

  return (
    <>
    {/* <div>

      <h1>Num1: {num} </h1>
      <h1>Num1: {num2} </h1>

      <button onClick={()=>{
        setNum(num +1)
      }}
      onDoubleClick={()=>{
        setNum2(num2 + 20)
      }}
      >Nums</button>

      <h1>Num1: {num} </h1>
      <h1>Num1: {num2} </h1>

      <button onMouseEnter={()=>{
        setNum(num +1)
      }}
      onMouseLeave={()=>{
        setNum2(num2 + 20)
      }}
      >Hover Nums</button>
      
    </div> */}

    <div>

      <h1>Increment: {a}</h1>
      <h2>Decrement: {b}</h2>
      <button onClick={()=>{
        setA(a +1)

      }}>Increment</button>
      <button onClick={()=>{
        setB(b -1)

      }}>Decrement</button>

    </div>
    </>
  )
}

export default App

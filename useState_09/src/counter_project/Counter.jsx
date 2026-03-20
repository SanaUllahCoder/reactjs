import  "./CounterStyle.css"
import react, {useState} from "react"
const Counter = () => {
    
    const [counter, setCounter] = useState(0)

    function increase (){
        setCounter (counter+1)
    }
    
    function decrease (){
        setCounter(counter-1)
    }

    function jumpFive(){
        setCounter(counter+5)
    }
    
    function decresaeFive(){
        setCounter(counter-5)
    }

  return (
    <div className="counter">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={jumpFive}>Decrease Plus 5</button>
        <button onClick={decresaeFive}>Decrease Minus 5</button>

    </div>
  )
}

export default Counter

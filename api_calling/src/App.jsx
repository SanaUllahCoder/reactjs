import axios from "axios"
import { useState } from "react"
const App = () => {
  // FETCH METHOD

  async function getData() {
    const apiFetch = await fetch('https://dummyjson.com/test')
    console.log(apiFetch)

  }

  // AXIOS METHOD 

  // const getDatas = 
  const axiosData = async () => {
    const apiAxios = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(apiAxios.data)
  }

  // example

  const axiosDataExp = async () => {
    const apiAxios = await axios.get("https://picsum.photos/v2/list")
    console.log(apiAxios)
  }

  // AXIOS WITH useState Hook 

  const [apiAxios, setApiAxios] = useState([])
  const getAxiosUsestate = async () => {
    const apiAxiosUsehook = await axios.get('https://picsum.photos/v2/list')
    console.log(apiAxiosUsehook)
    setApiAxios(apiAxiosUsehook.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Fetch Data or API Method  </button>
      <button onClick={axiosData}>Get Axios Data or API Method  </button>
      <button onClick={axiosDataExp}>Get Axios Data or API Method Example </button>
      <div>
        <button onClick={getAxiosUsestate}>Get Axios Data or API Method useState Example </button>
        <div>
          {apiAxios.map((user, idx) => {

            return <h1>hellos{user.author} {idx}</h1>
          })}
        </div>

      </div>

    </div>
  )
}

export default App

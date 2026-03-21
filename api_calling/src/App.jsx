import axios from "axios"
import { useState } from "react"
import './App.css'

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
    <div className="app-container">
      <h1 className="title">API Calling Demo</h1>
      <div className="button-group">
        <button className="btn btn-fetch" onClick={getData}>Get Fetch Data</button>
        <button className="btn btn-axios" onClick={axiosData}>Get Axios Data</button>
        <button className="btn btn-example" onClick={axiosDataExp}>Axios Example</button>
        <button className="btn btn-usestate" onClick={getAxiosUsestate}>Load Images with useState</button>
      </div>
      <div className="data-display">
        {apiAxios.length > 0 && (
          <div className="image-grid">
            {apiAxios.map((item, idx) => (
              <div key={idx} className="image-card">
                <img src={item.download_url} alt={item.author} className="image" />
                <p className="author">Author: {item.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App

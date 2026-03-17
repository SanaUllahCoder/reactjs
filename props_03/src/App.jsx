import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className="cards-container">
      <Card user="Sana Ullah" age={19} img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30PnAgKDX0mcLkJ4_bhUQfQCC9VWhR02cbQ&s" />
      <Card user="Wasiq" age={24} img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnp-eE0RZ0cX-oZUbLaO5Dk7CtFv9YCQfWQ&s" />
    </div>
  )
}

export default App

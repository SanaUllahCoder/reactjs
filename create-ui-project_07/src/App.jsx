import Section1 from './components/Section_1/Navbar'
import Homepage from './components/Section_1/HomePage'

export const App = () => {

   const users = [
        {
            img: "https://i.pinimg.com/webp/1200x/f5/19/aa/f519aa2feca2909801e0dd9138ca4768.webp",
            intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita est, dolore incidunt ad rerum totam?",
            tag: "Underserved"
        },
        {
            img: "https://i.pinimg.com/736x/4a/46/3c/4a463c5737c7587d385b01935189a0b8.jpg",
            intro: "gameet, dolor sit amet consectetur adipisicing elit. Expedita est, dolore incidunt ad rerum totam?",
            tag: "Underserved"
        },
        {
            img: "https://i.pinimg.com/webp/1200x/66/05/3f/66053f632b39a7d6825ea09d898eab9d.webp",
            intro: "tailwind, dolor sit amet consectetur adipisicing elit. Expedita est, dolore incidunt ad rerum totam?",
            tag: "Underbanked"
        }
    ]
        
        

  return (
    <div>
      <Section1  />
      <Homepage users={users} />
    </div>
  )
}

export default App
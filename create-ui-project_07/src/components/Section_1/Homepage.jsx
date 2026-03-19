
import Homepage from './HeroSection'

export const HomePage = (props) => {
  console.log(props.users);
  

  return (
    <div className='h-full w-full'>
        <Homepage users={props.users} />
    </div>
  )
}


export default HomePage
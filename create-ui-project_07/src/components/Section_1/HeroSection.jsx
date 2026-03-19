
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const HeroSection = (props) => {
  console.log(props.users);
  return (
    <div className='py-10 flex justify-between gap-10 h-[90vh]  px-18'>
        <LeftContent />
        <RightContent users={props.users}  />
    </div>
  )
}

export default HeroSection

import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Homepage = () => {
  return (
    <div className='py-10 flex justify-between gap-10 h-[90vh]  px-18'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Homepage
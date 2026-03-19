import { User } from "lucide-react"
import RightCard from "./RightCard"
const RightContent = (props) => {



  return (
    <div className='h-full   flex rounded-4xl overflow-auto  gap-10 p-6 w-2/3'>
      {props.users.map((user, index) => {
        return <RightCard key={index} img={user.img} intro={user.intro} />
      })}

    </div>
  )
}

export default RightContent
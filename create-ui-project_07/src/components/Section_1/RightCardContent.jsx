import { ArrowRight } from "lucide-react"

const RightCardContent = (props) => {  
    
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between '>
                <h2 className="bg-white text-xl text-semibold rounded-full h-14 w-14 flex justify-center items-center">1</h2>
                <div>
                    <p className="text-lg leading-relaxed text-white mb-10" >{props.intro}</p>
                    <div className="flex justify-between ">
                        <button className="bg-blue-600 text-white font-medium text-xl px-8 py-2 rounded-full ">Satisfied</button>
                        <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full "><ArrowRight /></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent

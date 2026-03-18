import { ArrowRight } from "lucide-react"

const RightCard = () => {
    return (
        <div className='h-full w-80 overflow-hidden relative bg-blue-900 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold'>
            <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/9f/2e/e8/9f2ee82af2355d29e27a1075a466151b.jpg" alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
                <h1>1</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     <button>Satisfied</button>
                    <button><ArrowRight /></button>
                </div>
            </div>
        </div>

    )
}

export default RightCard
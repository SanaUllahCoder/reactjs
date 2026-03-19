import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    return (
        <div className='h-full w-80 shrink-0 overflow-hidden relative  rounded-lg shadow-lg flex items-center justify-center  text-2xl font-bold'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent intro={props.intro} />

        </div>

    )
}

export default RightCard
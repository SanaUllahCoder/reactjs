import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt={props.user} />
            <h1>{props.user}</h1>
            <h2>Age: {props.age}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis quas laborum et vel officiis iste? At ipsa soluta quod dicta consectetur, ipsam natus. Eaque amet est voluptatem. Illo, numquam!</p>
            <button>View Details</button>
        </div>
    )
}

export default Card

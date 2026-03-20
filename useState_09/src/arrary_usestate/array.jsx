import React, { useState } from 'react'


const array = () => {

    const [array, setarray] = useState([
        { id: 1, name: "Ali", age: 20 },
        { id: 2, name: "Ahmed", age: 22 },
        { id: 3, name: "Sara", age: 19 }
    ])

    return (
        <>

            {array.map((user, index) => (
                < div >
                    <h1>My Name is  {user.name}. and I am {user.age} years old</h1>
                </div >
            ))}
        </>
    )
}

export default array

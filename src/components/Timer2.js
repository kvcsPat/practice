// rfc creates react component automatically

import React, { useState } from 'react'

export default function Timer2() {
    function incrementTimer() {
        setTime(
            time + 1
        )
    }

    const [time, setTime] = useState(0) // actual state of time and a function we can set the state of time with

    return (
        <>
            <div>
                {time}
            </div>
            {/* <button onClick={() => { incrementTimer() }}
            >Click me</button> */}
            <button onClick={incrementTimer}>Click me</button>
        </>
    )
}
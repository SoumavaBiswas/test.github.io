import React, { useState } from 'react'
import './Button.css'

export default function PropsTest(props) {

    let [data, setData] = useState(props)

    return (
        <div>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
            <h2>Degree: {data.degree}</h2>
            <button className='button' onClick={() => setData({ name: data.name, age: data.age + 1, degree: data.degree })}>Increase Age</button>
            <button className='button' onClick={() => setData({ name: data.name, age: data.age - 1, degree: data.degree })}>Decrease Age</button>
        </div>
    )
}
import { useState } from "react"

// An eaxmple of fuctional component, nested functional component and example of state doesn't work on variable update
export function User() {
    let username = 'Soumava Biswas'
    function clickFuction() {
        username = 'Tua'
        alert(`Funcion called by ${username}`)
    }
    return (
        <div>
            <h3>Made by {username} for sake of learning!</h3>
            <button onClick={clickFuction}>Click Me!</button>
        </div>
    )
}


// An example of using state in functional component
export function UserWithState() {
    let username = 'Soumava Biswas'
    const [data, setData] = useState(username)
    function updateData() {
        setData('Tua')
    }
    return (
        <div>
            <h3>Made by {data} for sake of learning!</h3>
            <button onClick={updateData}>Click Me!</button>
        </div>
    )
}
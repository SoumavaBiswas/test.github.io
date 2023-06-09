import React from "react";


// Sample class component
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 'Soumava Biswas'
        }
    }
    render() {
        return (
            <div>
                <h1>This is Home</h1>
                <p>Home is made by {this.state.data} using class component</p>
                <button onClick={() => this.setState({ data: 'Tua' })}>Click Me!</button>
            </div>
        )
    }
}
import { Component } from "react";

class Parent extends Component {
    render() {
        return <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.description}</h1>
        </div>
    }
}

export default Parent;
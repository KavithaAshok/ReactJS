import { Component } from "react";

class HelloWorld extends Component{
    render(){
        return <div>
            <h1 className="btn btn-primary">{this.props.text}</h1>
        </div>
    }
}

export default HelloWorld;
import { Component } from "react";
import Parent from "../Parent/Parent";

class Child extends Component {
    state = {
        childComponent: [
            { name: 'I am parent component', description: 'I am parent description' }
        ]
    }

    render() {
        setTimeout(() => {
            console.log("timeout called");
            const updatedState = [...this.state.childComponent];
            updatedState[0].name = 'I am an updated parent component';
            updatedState[0].description = 'I am an updated parent description'

            this.setState({
                updatedState,
            })
        }, 3000);

        return ( <div>
            <Parent name={this.state.childComponent[0].name} description={this.state.childComponent[0].description}></Parent>
        </div>
        );
    }
}

export default Child;
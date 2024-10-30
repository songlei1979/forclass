import React, {Component} from 'react';
import SecondComponent from "./SecondComponent";

class FirstComponent extends Component {
    clickMe() {
        alert('You clicked me!');
    }

    render() {
        return (
            <div>
                <h1>My First Component</h1>
                <button className={'btn btn-danger'} onClick={this.clickMe}>Click Me</button>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={this.props.clickMe}>Click Me</button>
                <SecondComponent name={this.props.name} age={this.props.age}/>
            </div>
        );
    }
}

export default FirstComponent;
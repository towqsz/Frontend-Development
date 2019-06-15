import React, {Component} from 'react';
import Phones from './Phones';
import Form from './Form';

class StateLifter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            phones:[]
        }
    }

    handlePhonesChange = (value) => {
        this.setState({phones: value})
    };


    render() {
        return (
            <div>
                <Form phones={this.state.phones}
                      onChange={this.handlePhonesChange}/>
                <Phones phones={this.state.phones}
                        onChange={this.handlePhonesChange}/>
            </div>
        )
    }
}

export default StateLifter;
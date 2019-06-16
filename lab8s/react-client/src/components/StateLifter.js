import React, {Component} from 'react';
import Phones from './Phones';
import Form from './Form';
import axios from "axios";
import Filter from './Filter'
import Remove from './Delete'

class StateLifter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            phones:[]
        }
    }

    componentDidMount() {
        this.fetchPhones();
    }


    handlePhonesChange = (value) => {
        this.setState({phones: value});
    };

    async fetchPhones() {
        const values = await axios.get("http://localhost:4000/api/phones/all");
        this.setState(({phones: values.data}));
    }

    render() {
        return (
            <div>
                <Filter phones={this.state.phones}
                        onChange={this.handlePhonesChange}/>
                <Remove phones={this.state.phones}
                        onChange={this.handlePhonesChange}/>
                <Form phones={this.state.phones}
                      onChange={this.handlePhonesChange}/>
                <Phones phones={this.state.phones}
                        onChange={this.handlePhonesChange}/>

            </div>
        )
    }
}

export default StateLifter;
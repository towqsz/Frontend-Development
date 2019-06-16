import React, {Component} from 'react';
import axios from 'axios';
import Phones from './Phones'
import PhoneManager from './Api'

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChange(e);
    };

    state = {
        phone: '',
        phones: this.props.phones,
        phones_b: [],
        manager: new PhoneManager(),
        ram: ''

    };


    async fetchPhones() {
        const values = await axios.get("http://localhost:4000/api/phones/all");
        this.setState(({phones: values.data}));

    }

    handleSubmit = async (event) => {

        event.preventDefault();
        await this.fetchPhones();
        this.state.manager._database = this.state.phones;
        this.handleChange(this.state.manager.ram_filter(this.state.ram))
    };

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Filter by minimum ram:</label>
                        <p><input
                        value={this.state.model}
                        onChange={event => this.setState({ram: event.target.value})}
                        /></p>
                        <button>Filter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Filter
import React, {Component} from 'react';
import axios from 'axios';
import Phones from './Phones'
import PhoneManager from './Api'
import {PhoneManagerActionType} from './Api'

class Remove extends Component {
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
        id: ''

    };


    async fetchPhones() {
        const values = await axios.get("http://localhost:4000/api/phones/all");
        this.setState(({phones: values.data}));

    }

    handleSubmit = async (event) => {

        event.preventDefault();
        await this.fetchPhones();
        this.state.manager._database = this.state.phones;
        await axios.post("http://localhost:4000/api/phones/remove", {id: this.state.id});
        this.state.manager.update_database({id: this.state.id}, PhoneManagerActionType.REMOVE);
        this.handleChange(this.state.manager.database)
    };

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Remove:</label>
                        <p><input
                            value={this.state.id}
                            onChange={event => this.setState({id: event.target.value})}
                        /></p>
                        <button>Delete</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Remove
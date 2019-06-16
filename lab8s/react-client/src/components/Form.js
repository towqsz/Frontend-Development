import React, {Component} from 'react';
import axios from 'axios';
import Phones from './Phones'
import PhoneManager from './Api'

class Form extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChange(e);
    };

    state = {
        phone: '',
        phones: this.props.phones,
        manager: new PhoneManager(),
        model: '',
        submodel: '',
        battery: '',
        ram: '',
        touch_screen:'',
        os: '',
        os_version: ''

    };


    async fetchPhones() {
        const values = await axios.get("http://localhost:4000/api/phones/all");
        this.setState(({phones: values.data}));

    }

    handleSubmit = async (event) => {
        this.setState({phone: this.state.manager.create_phone(
            this.state.model, this.state.submodel, this.state.battery, this.state.ram, this.state.touch_screen,
                this.state.os, this.state.os_version)});
        event.preventDefault();
        await axios.post("http://localhost:4000/api/phones", {phone: this.state.phone});
        await this.fetchPhones();
        this.state.phones.push(this.state.phone);
        this.handleChange(this.state.phones)
    };

    render() {
        return (
            <div className="form">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>Model:</p><p> <input
                            value={this.state.model}
                            onChange={event => this.setState({model: event.target.value})}
                    /></p>
                        Submodel: <p><input
                            value={this.state.submodel}
                            onChange={event => this.setState({submodel: event.target.value})}
                        /></p>
                        Battery: <p><input
                            value={this.state.battery}
                            onChange={event => this.setState({battery: event.target.value})}
                        /></p>
                        Ram: <p><input
                            value={this.state.ram}
                            onChange={event => this.setState({ram: event.target.value})}
                        /></p>
                        Touch screen: <p><input
                            value={this.state.touch_screen}
                            onChange={event => this.setState({touch_screen: event.target.value})}
                        /></p>
                        Operating system: <p><input
                            value={this.state.os}
                            onChange={event => this.setState({os: event.target.value})}
                        /></p>
                        OS version: <p><input
                            value={this.state.os_version}
                            onChange={event => this.setState({os_version: event.target.value})}
                        /></p>

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
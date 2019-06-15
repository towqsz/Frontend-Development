import React, {Component} from 'react';
import axios from 'axios';


class Phone extends Component {
    state = {
        phone: '',
        phones: []
    };

    renderPhones() {
        return this.state.phones.map((n) => n).join(", ")
    }

    async fetchPhones() {
        const values = await axios.get("http://localhost:4000/api/phones/all");
        console.log(values);
        this.setState(({phones: values}));
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:4000/api/phones", {phone: this.state.phone});
        await this.fetchPhones();
    };

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter phone:</label>
                        <input
                            value={this.state.phone}
                            onChange={event => this.setState({phone: event.target.value})}
                        />
                        <button>Submit</button>
                    </form>
                </div>
                <div>{this.renderPhones()}</div>
            </div>
        )
    }
}

export default Phone
import React from "react";
import PhoneManager from "./Api.js"
import axios from "axios";


class Phones extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChange(e);
    };

    state = {
        phones: [],
        showParameters: {},
        manager: (new PhoneManager())
    };

    componentDidMount() {
        let a = this.fetchPhones();
    }

    async fetchPhones() {
        const values = await axios.get("http://localhost:4000/api/phones/all");
        this.setState(({phones: values.data}));
    }

    handlePhones = () =>{
        this.setState({ phones: this.state.manager.phones})};

    handleParameters = e => {
        const { id } = e.target;
        this.setState(current => ({
            showParameters: { ...current.showParameters, [id]: !current.showParameters[id] }
        }));
    };

    render() {
        return (
            <div>
                <h1>Phones</h1>

                <div>
                    {this.state.phones.map(phone => (
                        <div
                            key={phone.id}
                            id={phone.id}
                            onClick={this.handleParameters}
                        >
                            {phone.model} {phone.submodel}
                            {this.state.showParameters[phone.id] && (
                                <div style={{ border: "1px black solid" }}>
                                    {this.state.manager.get_phone_parameters(phone).map(param => (
                                        <div>{param}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Phones
import React from "react";
import PhoneManager from "./Api.js"
import axios from "axios";
import {PhoneManagerActionType} from './Api'


class Phones extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChange(e);
    };

    state = {
        phones: this.props.phones,
        showParameters: {},
        manager: (new PhoneManager()),
        delete_phone_id: ''
    };

    componentDidMount() {
        this.setState({phones:this.props.phones});
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
                    {this.props.phones.map(phone => (
                        <div
                            key={phone.id}
                            id={phone.id}
                            onClick={this.handleParameters}
                        >
                            {phone.model} {phone.submodel}

                            {this.state.showParameters[phone.id] && (
                                <div>
                                    <p>{this.state.manager.get_phone_parameters(phone).map(param => (
                                        <div>{param}</div>
                                    ))}
                                    </p>
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
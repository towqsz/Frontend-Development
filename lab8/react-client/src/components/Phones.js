import React from "react";
import PhoneManager from "./Api.js"

class Phones extends React.Component {
    state = {
        phones: [],
        showParameters: {},
        manager: (new PhoneManager())
    };

    componentDidMount() {
        this.handlePhones();
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
                                    {phone.get_parameters().map(param => (
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
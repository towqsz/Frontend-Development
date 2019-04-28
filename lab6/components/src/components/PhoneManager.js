import PhoneManager from "lab6/components/src/services/main"
import React, {Component} from 'react';
// co jakis czas losuj i podswietlaj
class PhoneManagerComponent extends Component{
    constructor(props) {
        super(props);
        this.manager = new PhoneManager();
    };

    render() {
        return (
            <div>
            <h1>this.manager.database</h1>
            <div/>
            )
    }
};
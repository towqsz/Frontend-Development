import PhoneManager from "lab6/components/src/services/main"
import React, {Component} from 'react';
//co jakis czas updatuj details dla wylosowanego

class DetailsComponent extends Component{
    constructor(props){
        super(props)
        this.manager = new PhoneManager
    }

    componentDidMount() {
        this.timerId = setInterval({this.update()})
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    update(){
        this.updatePhone()
    }

    render() {
        return (
            <div>
            <h1>this.manager.database</h1>
            <div/>
            )
    }
}
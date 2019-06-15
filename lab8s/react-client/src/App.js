import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import StateLifter from './components/StateLifter'

const PhoneManagerApp = () => {
    const title = "Phone Manager";
    const subtitle = "Phones:";
    return (
        <div>
            <Header title={title} />
            <StateLifter />

        </div>
    );
};

export default PhoneManagerApp;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Phones from './components/Phones.js'

const PhoneManagerApp = () => {
    const title = "Phone Manager";
    const subtitle = "Phones:";
    return (
        <div>
            <Header title={title} />
            <Phones />
        </div>
    );
};

export default PhoneManagerApp;
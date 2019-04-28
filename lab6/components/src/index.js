import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import PhoneManagerComponent from "./components/PhoneManager"
import DetailsComponent from "./components/DetailsComponent"


ReactDOM.render(<PhoneManagerComponent />, document.getElementById('root'));
ReactDOM.render(<DetailsComponent />, document.getElementById('root'));
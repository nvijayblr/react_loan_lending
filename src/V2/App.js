import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import HeaderComponent from './components/Header-Component/HeaderComponent';
import HomePageComponent from './components/HomePage-Component/HomePageComponent';
import PersonalLoanComponent from './components/PersonalLoan-Component/PersonalLoanComponent';

import { BrowserRouter as Router, Route } from "react-router-dom";

class AppComponent extends React.Component{
    
    render(){
        return (
            <Router>
                <div>
                    <Route exact component={HeaderComponent} />

                    <Route exact path="/" component={HomePageComponent} />
                    <Route exact path="/PersonalLoan" component={PersonalLoanComponent} />

                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <AppComponent />
    ,
    document.getElementById('root')
);
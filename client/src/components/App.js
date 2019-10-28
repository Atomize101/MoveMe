import React, { Component } from 'react';
import { } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './moveMe.css'

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import AddItem from './items/AddItem';


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/items" component={Dashboard} />
                        <Route exact path="/items/add" component={AddItem} />
                    </div>
                </BrowserRouter>
        );
    }
};

export default connect(null, actions)(App);


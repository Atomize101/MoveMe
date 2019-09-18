import React, { Component } from 'react';
import { } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './moveMe.css'

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => {
    return (
        <h2>Dashboard</h2>
    )
}

const NewItem = () => {
    return (
        <h2>NewItem</h2>
    )
}

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route path="/items" component={Dashboard} />
                        <Route exact path="/items/new" component={NewItem} />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);


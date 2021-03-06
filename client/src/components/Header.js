import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './moveMe.css'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default: 
                return <li><a href="api/logout">Logout</a></li>;
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
            <div className="nav-wrapper teal lighten-2">
                <Link to={this.props.auth ? '/items' : '/'}className="left brand-logo">
                    MoveMe
                </Link>
                <ul className="right">
                   {this.renderContent()}
                </ul>
            </div>
        </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }; 
}

export default connect(mapStateToProps)(Header);
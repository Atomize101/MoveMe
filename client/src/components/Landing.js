import React from 'react';
import './moveMe.css'

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                MoveMe
            </h1>
            <h4>Moving Soon? Let us help you with that!</h4>
            <div style={{textAlign: 'left'}} className="container">
                <p className="ludwig">Our family had such a great experience on our transition to our new home</p>
            </div>
            <div style={{textAlign: 'center'}} className="container">
                <p className="brooks">It streamlined the entire moving process for us!</p>
            </div>
            <div style={{textAlign: 'right'}} className="container">
                <p className="groucho">We were able to cut our packing time in half!</p>
            </div>
            
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Never Forget a thing!</span>
                            <p>MoveMe helps keep track of those items when it comes time for a new place to live!</p>
                        </div>
                        <div className="card-action">
                            <a href="/items">Click to Begin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
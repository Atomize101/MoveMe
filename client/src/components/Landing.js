import React from 'react';
import './moveMe.css'

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                MoveMe
            </h1>
            <h4>Moving Soon? Let us help you with that!</h4>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Never Forgot a thing!</span>
                            <p>MoveMe helps keep track of those items when it comes time for a new place to live!</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Click to Begin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
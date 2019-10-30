import React from 'react';

const itemReview = ({ onCancel }) => {
    return(
        <div>
            <h5>Item Review</h5>
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
                Back
            </button>
        </div>
    );

};

export default itemReview;
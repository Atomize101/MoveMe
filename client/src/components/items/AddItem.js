import React, { Component } from 'react';
import ItemForm from './ItemForm'
import ItemFormReview from './ItemFormReview';

class AddItem extends Component {

    state = { showFormReview: false };

    renderContent() {
        if(this.state.showFormReview === true) {
            return <ItemFormReview onCancel={() => this.setState({
                showFormReview: false
            })} />;
        }
        return <ItemForm onItemSubmit={() => this.setState({
            showFormReview: true
        })}/>;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default AddItem;

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ItemField from './ItemField';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const FIELDS = [
    {label: 'Item Name', name: 'name'},
    {label: 'Item Description', name: 'description'},
    {label: 'Item Price', name: 'price'}
];

class ItemForm extends Component {
    renderFields() {
       return _.map(FIELDS, ({ label, name }) => {
        return <Field key={name} component={ItemField} type="text" label={label} name={name} />
       });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/items" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="orange btn-flat right white-text">Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.name) {
        errors.name = 'You must provide a name';
    }
    if(!values.description) {
        errors.description = 'You must provide a description'
    }
    if(!values.price) {
        errors.price = 'You must provide a price'
    }

    return errors;
}

export default reduxForm({
    validate, 
    form: 'itemForm'
})(ItemForm);

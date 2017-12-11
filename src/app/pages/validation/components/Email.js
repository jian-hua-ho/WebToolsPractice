import React, { Component } from 'react';

class Email extends Component {
    // Life cycles
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProp) {
        console.log('isValid: ', validateEmail(nextProp.value));
    }

    // Render
    render() {
        return (
            <div>
                <input
                    type="email"
                    onChange={this.props.onChange}
                    value={this.props.value} />
            </div>
        );
    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default Email;
import React, { Component } from 'react';

class Email extends Component {
    // Life cycles
    constructor() {
        super();

        this.state = {
            message: '',
        };
    }

    componentWillReceiveProps(nextProp) {
        let message = 'Email is not valid';
        if (isValid(nextProp.value) || nextProp.value === '') {
            message = '';
        }

        this.setState({
            message,
        });
    }

    // Render
    render() {
        return (
            <div>
                <input
                    type="email"
                    onChange={this.props.onChange}
                    value={this.props.value} />
                <span>{this.state.message}</span>
            </div>
        );
    }
}

function isValid(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default Email;
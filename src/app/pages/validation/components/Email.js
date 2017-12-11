import React, { Component } from 'react';

class Email extends Component {
    // Life cycles
    constructor() {
        super();
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

export default Email;
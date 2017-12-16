import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
    // Life cycles
    constructor() {
        super();

        this.state = {
            message: '',
        };
    }

    // Render
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.props.onChange}
                    value={this.props.value} />
                <span>{this.state.message}</span>
            </div>
        );
    }
}

Text.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Text
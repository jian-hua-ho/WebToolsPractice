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
                <label>{this.props.label}</label>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange} />
                <span>{this.state.message}</span>
            </div>
        );
    }
}

Text.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange: PropTypes.func.isRequired,
};

export default Text;
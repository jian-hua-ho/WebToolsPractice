import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    ruleNames,
    validate
} from '../services/rules';

class Text extends Component {
    // Life cycles
    constructor() {
        super();

        this.state = {
            message: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        nextProps.rules.split('|').forEach((rule) => {
            if (ruleNames.indexOf(rule) < 0) {
                console.error(`Invalid Rules: ${rule}`)
                return;
            }

            let validator = validate(rule, nextProps.label, nextProps.value);

            if (!validator.isValid) {
                this.setState({
                    message: validator.message,
                });
            } else {
                this.setState({ message: '' });
            }
        });
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

                <div>
                    <span>{this.state.message}</span>
                </div>
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
    rules: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Text.defaultProps = {
    rules: '',
};

export default Text;
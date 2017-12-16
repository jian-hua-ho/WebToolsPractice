import React, { Component } from 'react';
import _ from 'lodash';

import Text from './components/Text';

class Validation extends Component {
    // Life Cycles
    constructor() {
        super();

        this.state = {
            email: '',
            numRange: 0,
        };

        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handleNumRangeChange = this._handleNumRangeChange.bind(this);
    }

    // Event handlers
    _handleEmailChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    _handleNumRangeChange(e) {
        let numRange = _.parseInt(e.target.value);
        if (_.isNaN(numRange)) {
            return;
        }

        this.setState({
            numRange,
        });
    }

    // Render
    render() {
        return (
            <div>
                <Text
                    name="Email"
                    label="Email: "
                    placeholder="text@example.com"
                    value={this.state.email}
                    rules="email"
                    onChange={this._handleEmailChange} />
                <div>
                    <label>Number Range:&nbsp;</label>
                    <input
                        type="text"
                        value={this.state.numRange}
                        onChange={this._handleNumRangeChange} />
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </div>
        );
    }
}

export default Validation;
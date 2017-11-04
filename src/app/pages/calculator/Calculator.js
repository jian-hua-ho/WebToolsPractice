import React, { Component } from 'react';
import _ from 'lodash';

// Components
import NumberInput from 'app/components/form/number/NumberInput';
import Button from 'app/components/element/button/Button';

// Util
import { INT_NUMBERS } from 'app/util/keyCode';

class Calculator extends Component {
    // Life Cycle
    constructor() {
        super();

        this.state = {
            num: 0,
        };
    }

    // Event Handlers
    _handleNumberKeyDown(e) {
        let oriNumString = _.toString(this.state.num),
            keyCode = e.which,
            value,
            resultString;

        if (keyCode === 8) {
            resultString = oriNumString === '0' ? oriNumString : oriNumString.slice(0, -1);
            value = _.toNumber(resultString);
        } else if (INT_NUMBERS.indexOf(keyCode) > -1) {
            let appendString = String.fromCharCode(keyCode);
            resultString = oriNumString === '0' ? appendString : oriNumString + appendString;
            value = _.toNumber(resultString);
        } else {
            value = _.toNumber(oriNumString);
        }

        this.setState({
            num: value,
        });
    }

    _handleEqualClick() {
        alert('Equal');
    }

    _handlePlusClick() {
        alert('Plus');
    }

    _handleMinusClick() {
        alert('Minus');
    }

    _handleBtnClick(numString) {
        let oriNumString = _.toString(this.state.num),
            resultString = oriNumString + numString,
            value = _.toNumber(resultString);

        this.setState({
            num: value,
        });
    }

    // Render
    render() {
        return (
            <div>
                <div>
                    <NumberInput
                        value={this.state.num}
                        onKeyDown={this._handleNumberKeyDown.bind(this)} />
                </div>
                <div>
                    <Button onClick={this._handleBtnClick.bind(this, '1')}>1</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '2')}>2</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '3')}>3</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '4')}>4</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '5')}>5</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '6')}>6</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '7')}>7</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '8')}>8</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '9')}>9</Button>
                    <Button onClick={this._handleBtnClick.bind(this, '0')}>0</Button>
                    <Button onClick={this._handleEqualClick.bind(this)} >=</Button>
                    <Button onClick={this._handlePlusClick.bind(this)} >+</Button>
                    <Button onClick={this._handleMinusClick.bind(this)} >-</Button>
                </div>
            </div>
        );
    }
}

export default Calculator;

import React, { Component } from 'react';
import _ from 'lodash';

// Components
import NumberInput from 'app/components/form/number/NumberInput';
import Button from 'app/components/element/button/Button';

// Util
import { INT_NUMBERS } from 'app/util/keyCode';

// Helper
import calculation, { OPERATORS } from 'app/helper/calculation';

class Calculator extends Component {
    // Life Cycle
    constructor() {
        super();

        this.state = {
            num: 0,
            currentNum: 0,
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
        };
    }

    // Event Handlers
    _handleNumberKeyDown(e) {
        let { num, shouldRefresh } = this.state,
            value = _getResultValue(e.which, num, shouldRefresh);

        this.setState({
            num: value,
            shouldRefresh: false,
        });
    }

    _handleEqualClick() {
        let { num, currentNum, operator, shouldRefresh } = this.state;

        this.setState({
            num: calculation.calc(currentNum, num, operator),
            currentNum: calculation.calc(currentNum, num, operator),
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
        })
    }

    _handlePlusClick() {
        let { num, currentNum, operator } = this.state;

        this.setState({
            num: calculation.calc(currentNum, num, operator),
            currentNum: calculation.calc(currentNum, num, operator),
            operator: OPERATORS.PLUS,
            shouldRefresh: true,
        });
    }

    _handleMinusClick() {
        let { num, currentNum, operator } = this.state;

        if (currentNum === 0) {
            this.setState({
                currentNum: num,
                operator: OPERATORS.MINUS,
                shouldRefresh: true,
            });

            return;
        }

        this.setState({
            num: calculation.calc(currentNum, num, operator),
            currentNum: calculation.calc(currentNum, num, operator),
            operator: OPERATORS.MINUS,
            shouldRefresh: true,
        });
    }

    _handleBtnClick(numString) {
        let { num, shouldRefresh } = this.state,
            value;

        if (shouldRefresh) {
            value = _.toNumber(numString);
        } else {
            let oriNumString = _.toString(num),
                resultString = oriNumString + numString;

            value = _.toNumber(resultString);
        }

        this.setState({
            num: value,
            shouldRefresh: false,
        });
    }

    _handleResetClick() {
        this.setState({
            num: 0,
            currentNum: 0,
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
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
                    <Button onClick={this._handlePlusClick.bind(this)}>+</Button>
                    <Button onClick={this._handleMinusClick.bind(this)}>-</Button>
                    <Button onClick={this._handleResetClick.bind(this)}>RESET</Button>
                </div>
            </div>
        );
    }
}

function _getResultValue(keyCode, num, shouldRefresh) {
    let oriNumString = _.toString(num),
        result;

    if (shouldRefresh) {
        return _.toNumber(String.fromCharCode(keyCode));
    }

    if (keyCode === 8) {
        let resultString = oriNumString === '0' ? oriNumString : oriNumString.slice(0, -1);
        result = _.toNumber(resultString);
    } else if (INT_NUMBERS.indexOf(keyCode) > -1) {
        let appendString = String.fromCharCode(keyCode);
        let resultString = oriNumString === '0' ? appendString : oriNumString + appendString;
        result = _.toNumber(resultString);
    } else {
        result = _.toNumber(oriNumString);
    }

    return result;
}

export default Calculator;

import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';

// Components
import NumberInput from './components/form/number/NumberInput';
import Button from './components/element/button/Button';

// Constants
import { KEYCODE_NUM, KEYCODE_COMMON } from 'constants/keyCode';

// Helper
import calculation, { OPERATORS } from 'helper/calculation';

// Styles
import styles from './styles';

class Calculator extends Component {
    // Life Cycle
    constructor() {
        super();

        this.state = {
            displayNum: 0,
            currentNum: 0,
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
        };

        this._reset = this._reset.bind(this);
        this._operation = this._operation.bind(this);
        this._handleNumberKeyDown = this._handleNumberKeyDown.bind(this);
        this._handleBackspaceKeyDown = this._handleBackspaceKeyDown.bind(this);
        this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
        this._handlePlusKeyDown = this._handlePlusKeyDown.bind(this);
        this._handleMinusKeyDown = this._handleMinusKeyDown.bind(this);
        this._handleEnterKeyDown = this._handleEnterKeyDown.bind(this);
        this._handleEqualClick = this._handleEqualClick.bind(this);
        this._handleAddClick = this._handleAddClick.bind(this);
        this._handleSubClick = this._handleSubClick.bind(this);
        this._handleResetClick = this._handleResetClick.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);
    }

    componentWillMount() {
        window.document.addEventListener('keydown', this._handleNumberKeyDown, false);
        window.document.addEventListener('keydown', this._handleBackspaceKeyDown, false);
        window.document.addEventListener('keydown', this._handleEscKeyDown, false);
        window.document.addEventListener('keydown', this._handlePlusKeyDown, false);
        window.document.addEventListener('keydown', this._handleMinusKeyDown, false);
        window.document.addEventListener('keydown', this._handleEnterKeyDown, false);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this._handleNumberKeyDown, false);
        window.document.removeEventListener('keydown', this._handleBackspaceKeyDown, false);
        window.document.removeEventListener('keydown', this._handleEscKeyDown, false);
        window.document.removeEventListener('keydown', this._handlePlusKeyDown, false);
        window.document.removeEventListener('keydown', this._handleMinusKeyDown, false);
        window.document.removeEventListener('keydown', this._handleEnterKeyDown, false);
    }

    // Event Handlers
    _handleNumberKeyDown(e) {
        if (Object.values(KEYCODE_NUM).indexOf(e.which) < 0) {
            return;
        }

        let { displayNum, shouldRefresh } = this.state,
            value;

        if (shouldRefresh) {
            value = _.toNumber(String.fromCharCode(e.which));
        } else {
            value = _getNum(e.which, displayNum, shouldRefresh);
        }

        this.setState({
            displayNum: value,
            shouldRefresh: false,
        });
    }

    _handleBackspaceKeyDown(e) {
        if (e.which === KEYCODE_COMMON.BACKSPACE) {
            let { displayNum } = this.state,
                oriNumStr = _.toString(displayNum),
                resultString = oriNumStr === '0' ? oriNumStr : oriNumStr.slice(0, -1),
                result = _.toNumber(resultString);

            this.setState({
                displayNum: result,
            });
        }
    }

    _handleEscKeyDown(e) {
        if (e.which === KEYCODE_COMMON.ESC) {
            this._reset();
        }
    }

    _handlePlusKeyDown(e) {
        if (e.shiftKey && e.which === KEYCODE_COMMON.PLUS_OR_EQUAL) {
            this._operation(OPERATORS.PLUS);
        }
    }

    _handleMinusKeyDown(e) {
        if (e.which === KEYCODE_COMMON.MINUS) {
            this._operation(OPERATORS.MINUS);
        }
    }

    _handleEnterKeyDown(e) {
        if (e.which === KEYCODE_COMMON.ENTER) {
            this._operation(OPERATORS.DEFAULT);
        }
    }

    _handleEqualClick() {
        this._operation(OPERATORS.DEFAULT);
    }

    _handleAddClick() {
        this._operation(OPERATORS.PLUS);
    }

    _handleSubClick() {
        this._operation(OPERATORS.MINUS);
    }

    _handleBtnClick(numString) {
        let that = this;

        return () => {
            let { displayNum, shouldRefresh } = that.state,
                value;

            if (shouldRefresh) {
                value = _.toNumber(numString);
            } else {
                let oriNumString = _.toString(displayNum),
                    resultString = oriNumString + numString;

                value = _.toNumber(resultString);
            }

            that.setState({
                displayNum: value,
                shouldRefresh: false,
            });
        }
    }

    _handleResetClick() {
        this._reset();
    }

    // Helpers
    _operation(newOperator) {
        if (Object.values(OPERATORS).indexOf(newOperator) < 0) {
            throw new Error('Invalid operator');
        }

        let { displayNum, currentNum, operator } = this.state,
            newNum = calculation.calc(currentNum, displayNum, operator),
            shouldRefresh = newOperator !== OPERATORS.DEFAULT;

        this.setState({
            displayNum: newNum,
            currentNum: newNum,
            operator: newOperator,
            shouldRefresh,
        });
    }

    _reset() {
        this.setState({
            displayNum: 0,
            currentNum: 0,
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
        });
    }

    // Render
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <NumberInput value={this.state.displayNum} />
                </div>
                <div className={styles.row}>
                    <Button onClick={this._handleResetClick}>AC</Button>
                    <Button>+/-</Button>
                    <Button>%</Button>
                    <Button>/</Button>
                </div>
                <div className={styles.row}>
                    <Button onClick={this._handleBtnClick('7')}>7</Button>
                    <Button onClick={this._handleBtnClick('8')}>8</Button>
                    <Button onClick={this._handleBtnClick('9')}>9</Button>
                    <Button>*</Button>
                </div>
                <div className={styles.row}>
                    <Button onClick={this._handleBtnClick('4')}>4</Button>
                    <Button onClick={this._handleBtnClick('5')}>5</Button>
                    <Button onClick={this._handleBtnClick('6')}>6</Button>
                    <Button onClick={this._handleSubClick}>-</Button>
                </div>
                <div className={styles.row}>
                    <Button onClick={this._handleBtnClick('1')}>1</Button>
                    <Button onClick={this._handleBtnClick('2')}>2</Button>
                    <Button onClick={this._handleBtnClick('3')}>3</Button>
                    <Button onClick={this._handleAddClick}>+</Button>
                </div>
                <div className={styles.row}>
                    <Button onClick={this._handleBtnClick('0')}>0</Button>
                    <Button>.</Button>
                    <Button onClick={this._handleEqualClick}>=</Button>
                </div>
            </div>
        );
    }
}

function _getNum(keyCode, num, shouldRefresh) {
    let oriNumString = _.toString(num),
        appendString = String.fromCharCode(keyCode),
        resultString = oriNumString === '0' ? appendString : oriNumString + appendString,
        result = _.toNumber(resultString);

    return result;
}

export default Calculator;

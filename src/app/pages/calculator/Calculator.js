import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';

// Components
import NumberInput from './components/number/NumberInput';
import Button from './components/button/Button';

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
            operand: 0,
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
            isFloat: false,
        };

        this._reset = this._reset.bind(this);
        this._operation = this._operation.bind(this);
        this._handleNumberKeyDown = this._handleNumberKeyDown.bind(this);
        this._handleBackspaceKeyDown = this._handleBackspaceKeyDown.bind(this);
        this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
        this._handlePlusKeyDown = this._handlePlusKeyDown.bind(this);
        this._handleMinusKeyDown = this._handleMinusKeyDown.bind(this);
        this._handleEnterKeyDown = this._handleEnterKeyDown.bind(this);
        this._handleDivideKeyDown = this._handleDivideKeyDown.bind(this);
        this._handleTimesKeyDown = this._handleTimesKeyDown.bind(this);
        this._handleEqualClick = this._handleEqualClick.bind(this);
        this._handleDotClick = this._handleDotClick.bind(this);
        this._handleAddClick = this._handleAddClick.bind(this);
        this._handleSubClick = this._handleSubClick.bind(this);
        this._handleDivideClick = this._handleDivideClick.bind(this);
        this._handleTimesClick = this._handleTimesClick.bind(this);
        this._handlePlusmnClick = this._handlePlusmnClick.bind(this);
        this._handlePercentClick = this._handlePercentClick.bind(this);
        this._handleResetClick = this._handleResetClick.bind(this);
        this._handleNumBtnClick = this._handleNumBtnClick.bind(this);
    }

    componentWillMount() {
        window.document.addEventListener('keydown', this._handleNumberKeyDown, false);
        window.document.addEventListener('keydown', this._handleBackspaceKeyDown, false);
        window.document.addEventListener('keydown', this._handleEscKeyDown, false);
        window.document.addEventListener('keydown', this._handlePlusKeyDown, false);
        window.document.addEventListener('keydown', this._handleMinusKeyDown, false);
        window.document.addEventListener('keydown', this._handleEnterKeyDown, false);
        window.document.addEventListener('keydown', this._handleDivideKeyDown, false);
        window.document.addEventListener('keydown', this._handleTimesKeyDown, false);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this._handleNumberKeyDown, false);
        window.document.removeEventListener('keydown', this._handleBackspaceKeyDown, false);
        window.document.removeEventListener('keydown', this._handleEscKeyDown, false);
        window.document.removeEventListener('keydown', this._handlePlusKeyDown, false);
        window.document.removeEventListener('keydown', this._handleMinusKeyDown, false);
        window.document.removeEventListener('keydown', this._handleEnterKeyDown, false);
        window.document.removeEventListener('keydown', this._handleDivideKeyDown, false);
        window.document.removeEventListener('keydown', this._handleTimesKeyDown, false);
    }

    // Event Handlers
    _handleNumberKeyDown(e) {
        if (e.shiftKey || Object.values(KEYCODE_NUM).indexOf(e.which) < 0) {
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
            operand: value,
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

    _handleDivideKeyDown(e) {
        if (e.which === KEYCODE_COMMON.DIVIDE) {
            this._operation(OPERATORS.DIVIDE);
        }
    }

    _handleTimesKeyDown(e) {
        if (e.shiftKey && e.which === KEYCODE_COMMON.TIMES) {
            this._operation(OPERATORS.TIMES);
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

    _handleDotClick() {
        this.setState({
            isFloat: true,
        });
    }

    _handleAddClick() {
        this._operation(OPERATORS.PLUS);
    }

    _handleSubClick() {
        this._operation(OPERATORS.MINUS);
    }

    _handleDivideClick() {
        this._operation(OPERATORS.DIVIDE);
    }

    _handleTimesClick() {
        this._operation(OPERATORS.TIMES);
    }

    _handlePlusmnClick() {
        let { displayNum } = this.state;

        this.setState({
            displayNum: displayNum * -1,
        });
    }

    _handlePercentClick() {
        let { displayNum } = this.state,
            num = displayNum / 100;

        this.setState({
            displayNum: num,
        });
    }

    _handleNumBtnClick(numString) {
        let that = this;

        return () => {
            let { displayNum, shouldRefresh, isFloat } = that.state,
                value;

            if (shouldRefresh) {
                value = _.toNumber(numString);
            } else {
                let oriNumString = _.toString(displayNum);

                if (isFloat && !oriNumString.includes('.')) {
                    value = _.toNumber(`${oriNumString}.${numString}`);
                } else {
                    value = _.toNumber(`${oriNumString}${numString}`);
                }
            }

            that.setState({
                displayNum: value,
                operand: value,
                isFloat: !isFloat,
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

        let { displayNum, currentNum, operand, operator } = this.state,
            newNum = calculation.calc(currentNum, operand, operator),
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
            operand: 0,
            operator: OPERATORS.DEFAULT,
            shouldRefresh: false,
            isFloat: false,
        });
    }

    // Render
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <div className={styles.row}>
                        <NumberInput className={styles.numbebr} value={this.state.displayNum} />
                    </div>
                    <div className={styles.row}>
                        <Button type="gray" onClick={this._handleResetClick}>AC</Button>
                        <Button type="gray" onClick={this._handlePlusmnClick}>&plusmn;</Button>
                        <Button type="gray" onClick={this._handlePercentClick}>%</Button>
                        <Button type="orange" onClick={this._handleDivideClick}>&divide;</Button>
                    </div>
                    <div className={styles.row}>
                        <Button type="black" onClick={this._handleNumBtnClick('7')}>7</Button>
                        <Button type="black" onClick={this._handleNumBtnClick('8')}>8</Button>
                        <Button type="black" onClick={this._handleNumBtnClick('9')}>9</Button>
                        <Button type="orange" onClick={this._handleTimesClick}>&times;</Button>
                    </div>
                    <div className={styles.row}>
                        <Button type="black" onClick={this._handleNumBtnClick('4')}>4</Button>
                        <Button type="black" onClick={this._handleNumBtnClick('5')}>5</Button>
                        <Button type="black" onClick={this._handleNumBtnClick('6')}>6</Button>
                        <Button type="orange" onClick={this._handleSubClick}>-</Button>
                    </div>
                    <div className={styles.row}>
                        <Button type="black" onClick={this._handleNumBtnClick('1')}>1</Button>
                        <Button type="black" onClick={this._handleNumBtnClick('2')}>2</Button>
                        <Button type="black" onClick={this._handleNumBtnClick('3')}>3</Button>
                        <Button type="orange" onClick={this._handleAddClick}>+</Button>
                    </div>
                    <div className={styles.row}>
                        <Button type="black" onClick={this._handleNumBtnClick('0')}>0</Button>
                        <Button type="black" width="medium" onClick={this._handleDotClick}>.</Button>
                        <Button type="orange" onClick={this._handleEqualClick}>=</Button>
                    </div>
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

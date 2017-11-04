import React, { Component } from 'react';

// Components
import NumberInput from 'app/components/form/number/NumberInput';
import Button from 'app/components/element/button/Button';

class Calculator extends Component {
    // Event handlers
    _handleBtnClick(str) {
        alert(str);
    }

    // Render
    render() {
        return (
            <div>
                <NumberInput />
                <Button onClick={this._handleBtnClick.bind(this, '1')} >1</Button>
                <Button onClick={this._handleBtnClick.bind(this, '2')} >2</Button>
                <Button onClick={this._handleBtnClick.bind(this, '3')} >3</Button>
                <Button onClick={this._handleBtnClick.bind(this, '4')} >4</Button>
                <Button onClick={this._handleBtnClick.bind(this, '5')} >5</Button>
                <Button onClick={this._handleBtnClick.bind(this, '6')} >6</Button>
                <Button onClick={this._handleBtnClick.bind(this, '7')} >7</Button>
                <Button onClick={this._handleBtnClick.bind(this, '8')} >8</Button>
                <Button onClick={this._handleBtnClick.bind(this, '9')} >9</Button>
                <Button onClick={this._handleBtnClick.bind(this, '0')} >0</Button>
            </div>
        );
    }
}

export default Calculator;

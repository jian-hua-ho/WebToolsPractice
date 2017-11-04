import React, { Component } from 'react';

// Components
import NumberInput from 'app/components/form/number/NumberInput';
import Button from 'app/components/element/button/Button';

class Calculator extends Component {
    render() {
        return (
            <div>
                <NumberInput />
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>0</Button>
            </div>
        );
    }
}

export default Calculator;

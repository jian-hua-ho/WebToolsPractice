
const export OPERATORS = {
    DEFAULT: '',
    PLUS: '+',
    MINUS: '-',
};

function calculate(num1, num2, operator) {
    switch (operator) {
        case OPERATORS.PLUS:
            return num1 + num2;
        case OPERATORS.MINUS:
            return num1 - num2;
        default:
            return 0;
    }
}

export default {
    calculate,
};

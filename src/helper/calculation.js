
function calc(currentNum, operand, operator) {
    switch (operator) {
        case OPERATORS.PLUS:
            return currentNum + operand;
        case OPERATORS.MINUS:
            return currentNum - operand;
        case OPERATORS.DIVIDE:
            return window.parseFloat((currentNum / operand).toFixed(9));
        case OPERATORS.TIMES:
            return window.parseFloat((currentNum * operand).toFixed(9));
        default:
            return currentNum !== 0 ? currentNum : operand;
    }
}

export const OPERATORS = {
    DEFAULT: '',
    PLUS: '+',
    MINUS: '-',
    DIVIDE: '/',
    TIMES: '*',
};

export default {
    calc,
};

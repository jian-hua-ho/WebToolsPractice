
function calc(currentNum, num, operator) {
    switch (operator) {
        case OPERATORS.PLUS:
            return currentNum + num;
        case OPERATORS.MINUS:
            return currentNum - num;
        default:
            return num;
    }
}

export const OPERATORS = {
    DEFAULT: '',
    PLUS: '+',
    MINUS: '-',
};

export default {
    calc,
};

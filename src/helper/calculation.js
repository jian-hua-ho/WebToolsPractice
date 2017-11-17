
function calc(currentNum, displayNum, operator) {
    switch (operator) {
        case OPERATORS.PLUS:
            return currentNum + displayNum;
        case OPERATORS.MINUS:
            return currentNum - displayNum;
        case OPERATORS.DIVIDE:
            return window.parseFloat((currentNum / displayNum).toFixed(9));
        case OPERATORS.TIMES:
            return window.parseFloat((currentNum * displayNum).toFixed(9));
        default:
            return displayNum;
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


function calc(currentNum, displayNum, operator) {
    switch (operator) {
        case OPERATORS.PLUS:
            return currentNum + displayNum;
        case OPERATORS.MINUS:
            return currentNum - displayNum;
        case OPERATORS.DIVIDE:
            return currentNum / displayNum;
        case OPERATORS.TIMES:
            return currentNum * displayNum;
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

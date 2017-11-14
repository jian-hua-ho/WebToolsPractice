import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const NumberInput = ({ value, onKeyDown, max, min, placeholder }) => {
    return (
        <input
            type="number"
            value={value}
            max={max}
            min={min}
            onKeyDown={onKeyDown}
            placeholder={placeholder} />
    );
};

NumberInput.propTypes = {
    value: PropTypes.number,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
};

NumberInput.defaultProps = {
    value: 0,
    min: -99999999,
    max: 99999999,
};

export default NumberInput;

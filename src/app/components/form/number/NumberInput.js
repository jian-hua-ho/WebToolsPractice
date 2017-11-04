import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const NumberInput = ({ value, onKeyDown, placeholder }) => {
    return (
        <input
            type="number"
            value={value}
            onKeyDown={onKeyDown}
            placeholder={placeholder} />
    );
};

NumberInput.propTypes = {
    value: PropTypes.number,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
};

NumberInput.defaultProps = {
    value: 0,
};

export default NumberInput;

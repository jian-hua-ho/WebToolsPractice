import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const NumberInput = ({ value, onKeyPress, placeholder }) => {
    return (
        <input
            type="number"
            value={value}
            onKeyPress={onKeyPress}
            placeholder={placeholder} />
    );
};

NumberInput.propTypes = {
    value: PropTypes.number,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
};

NumberInput.defaultProps = {
    value: 0,
};

export default NumberInput;

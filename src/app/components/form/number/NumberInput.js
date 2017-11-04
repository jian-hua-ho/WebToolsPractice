import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder} />
    );
};

NumberInput.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

NumberInput.defaultProps = {
    value: 0,
};

export default NumberInput;

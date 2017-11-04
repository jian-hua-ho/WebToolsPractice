import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({ value }) => {
    return (
        <input
            type="number"
            value={value} />
    );
};

NumberInput.propTypes = {
    value: PropTypes.number,
};

NumberInput.defaultProps = {
    value: 0,
};

export default NumberInput;

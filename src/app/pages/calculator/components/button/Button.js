import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ children, onClick }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;

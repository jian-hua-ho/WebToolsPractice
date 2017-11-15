import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles';

const TYPE = {
    DEFAULT: 'default',
};

const Button = ({ children, onClick, type }) => {
    let buttonStyle;

    switch (type) {
        case TYPE.DEFAULT:
            buttonStyle = cx(styles.button, styles.default);
            break;

        default:
            throw new Error('Invalid button type');
    }

    return (
        <button
            className={buttonStyle}
            onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'default',
};

export default Button;

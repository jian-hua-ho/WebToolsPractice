import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles';

const TYPE = {
    DEFAULT: 'default',
    GRAY: 'gray',
    ORANGE: 'orange',
    BLACK: 'black',
};

const WIDTH = {
    SMALL: 'samll',
    MEDIUM: 'medium',
    LARGE: 'large',
};

const Button = ({ children, onClick, type, width }) => {
    let btnStyle;

    switch (type) {
        case TYPE.DEFAULT:
            btnStyle = styles.button;
            break;

        case TYPE.GRAY:
            btnStyle = cx(styles.button, styles.gray);
            break;

        case TYPE.ORANGE:
            btnStyle = cx(styles.button, styles.orange);
            break;

        case TYPE.BLACK:
            btnStyle = cx(styles.button, styles.black);
            break;

        default:
            throw new Error('Invalid button type');
    }

    switch (width) {
        case WIDTH.SMALL:
            btnStyle = cx(btnStyle, styles.small);
            break;

        case WIDTH.MEDIUM:
            btnStyle = cx(btnStyle, styles.medium);
            break;

        case WIDTH.LARGE:
            btnStyle = cx(btnStyle, styles.large);
            break;

        default:
            throw new Error('Invalid button width');
    }

    return (
        <button
            className={btnStyle}
            onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    width: PropTypes.number,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'default',
    width: WIDTH.SMALL,
};

export default Button;

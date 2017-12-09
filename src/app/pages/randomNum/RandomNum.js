import React, { Component } from 'react';

import styles from './styles';

class RandomNum extends Component {
    // Render
    render() {
        return (
            <div className={styles.randomNumContainer}>
                <div className={styles.containerCenter}>
                    <span className={styles.numDisplay}>0</span>
                </div>
                <div className={styles.containerCenter}>
                    <input
                        className={styles.input}
                        type="text"
                        value="1"
                        placeholder="MIN" />
                </div>
                <div className={styles.containerCenter}>
                    <input
                        className={styles.input}
                        type="text"
                        value="20"
                        placeholder="MAX" />
                </div>
                <div className={styles.containerCenter}>
                    <button className={styles.btn}>START</button>
                </div>
            </div>
        );
    }
}

export default RandomNum;
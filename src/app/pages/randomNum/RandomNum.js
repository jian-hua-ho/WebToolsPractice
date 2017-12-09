import React, { Component } from 'react';
import _ from 'lodash';

import styles from './styles';

class RandomNum extends Component {
    // Life cycles
    constructor() {
        super();

        this.state = {
            displayNum: 0,
            minNum: 1,
            maxNum: 20,
        };

        this._handleMinChange = this._handleMinChange.bind(this);
        this._handleMaxChange = this._handleMaxChange.bind(this);
        this._handleChangeClick = this._handleChangeClick.bind(this);
    }

    // Event handlers
    _handleMinChange(e) {
        let minNum = _.parseInt(e.target.value);
        if (_.isNaN(minNum)) {
            minNum = 0;
        }

        this.setState({
            minNum,
        });
    }

    _handleMaxChange(e) {
        let maxNum = _.parseInt(e.target.value);
        if (_.isNaN(maxNum)) {
            maxNum = 0;
        }

        this.setState({
            maxNum,
        });
    }

    _handleChangeClick() {
        let minNum = _.parseInt(this.state.minNum),
            maxNum = _.parseInt(this.state.maxNum);

        if (minNum >= maxNum) {
            alert('Max number must bigger than min number');
            return;
        }

        let displayNum = getRandomInt(minNum, maxNum);
        this.setState({
            displayNum,
        });
    }

    // Render
    render() {
        return (
            <div className={styles.randomNumContainer}>
                <div className={styles.containerCenter}>
                    <span className={styles.numDisplay}>
                        {this.state.displayNum}
                    </span>
                </div>
                <div className={styles.containerCenter}>
                    <input
                        className={styles.input}
                        type="text"
                        value={this.state.minNum}
                        onChange={this._handleMinChange} />
                </div>
                <div className={styles.containerCenter}>
                    <input
                        className={styles.input}
                        type="text"
                        value={this.state.maxNum}
                        onChange={this._handleMaxChange} />
                </div>
                <div className={styles.containerCenter}>
                    <button className={styles.btn} onClick={this._handleChangeClick}>START</button>
                </div>
            </div>
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default RandomNum;
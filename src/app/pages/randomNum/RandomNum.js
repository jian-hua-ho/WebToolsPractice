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
            btnDisabled: false,
        };

        this._handleMinChange = this._handleMinChange.bind(this);
        this._handleMaxChange = this._handleMaxChange.bind(this);
        this._handleChangeClick = this._handleChangeClick.bind(this);
        this._repeatUntil = this._repeatUntil.bind(this);
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
        let that = this,
            minNum = _.parseInt(that.state.minNum),
            maxNum = _.parseInt(that.state.maxNum);

        if (minNum >= maxNum) {
            alert('Max number must bigger than min number');
            return;
        }

        that.setState({
            btnDisabled: true,
        }, () => {
            that._repeatUntil(() => {
                let displayNum = getRandomInt(minNum, maxNum);
                that.setState({
                    displayNum,
                });
            }, 30, 280);
        });
    }

    // Helpers
    _repeatUntil(fn, start, end) {
        let that = this;
        if (start < end) {
            window.setTimeout(function () {
                fn();
                that._repeatUntil(fn, start * 1.05, end);
            }, start);
        } else {
            that.setState({
                btnDisabled: false,
            });
        }
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
                    <button
                        className={styles.btn}
                        onClick={this._handleChangeClick}
                        disabled={this.state.btnDisabled}>
                        START
                    </button>
                </div>
            </div>
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default RandomNum;
import React from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1>React Sample: Web Tools</h1>
            <ul>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/random-num">Random Number</Link></li>
            </ul>
        </div>
    );
};

export default Root;

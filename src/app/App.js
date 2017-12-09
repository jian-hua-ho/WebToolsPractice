import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './styles';

// Components
import Root from 'app/pages/root/Root';
import Calculator from 'app/pages/calculator/Calculator';
import RandomNum from 'app/pages/randomNum/RandomNum';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/calculator" component={Calculator} />
                    <Route path="/random-num" component={RandomNum} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Root from 'app/pages/root/Root';
import Calculator from 'app/pages/calculator/Calculator';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/calculator" component={Calculator} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

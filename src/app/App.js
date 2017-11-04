import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Root from 'app/pages/root/Root';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Root} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

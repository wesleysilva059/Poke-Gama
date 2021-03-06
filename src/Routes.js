import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Views/Home';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}

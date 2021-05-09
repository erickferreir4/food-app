import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from './pages/product'
import Home from './pages/home'

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
        </Switch>
    )
}

export default Router;

import React from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import Product from './pages/product'
import Home from './pages/home'
import Category from './pages/category'

const Router = () => {
    return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:name/p' component={Product} />
                <Route exact path='/:category' component={Category} />
            </Switch>
    )
}
export default Router;

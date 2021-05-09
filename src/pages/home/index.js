import React from 'react';
import Main from './../../components/main'
import Menu from './../../components/menu'
import Items from './../../components/items'
import Shelf from './../../components/shelf'
import Category from './../../components/category'

const Home = () => {
    return(
        <>
            <Main />
            <Menu />
            <Items />
            <Shelf />
            <Category />
        </>
    )
}

export default Home;

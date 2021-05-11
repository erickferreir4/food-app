import React from 'react';
import Main from './../../components/main'
import Menu from './../../components/menu'
import Items from './../../components/items'
import Shelf from './../../components/shelf'
import Category from './../../components/category'
import { HomeStorage, HomeContext } from './../../context/HomeContext';

const HomeWrapper = () => {

    const {shelf, shelfTitle} = React.useContext(HomeContext)

    return(
        <>
           <Main />
           <Menu />
           <Items />
           <Shelf items={shelf} title={shelfTitle}/>
           <Category />
        </>
    )
}

const Home = () => {
    return(
        <HomeStorage>
            <HomeWrapper/>
        </HomeStorage>
    )
}

export default Home;

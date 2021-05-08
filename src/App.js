import React from 'react';
import './reset.css';
import './App.scss'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import Menu from './components/menu'
import Items from './components/items'
import Shelf from './components/shelf'
import Category from './components/category'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Main />
                <Menu />
                <Items />
                <Shelf />
                <Category />
            </main>
            <Footer />
        </>
    )

}

export default App;

import React from 'react';
import './reset.css';
import './App.scss'
import Header from './components/header'
import Footer from './components/footer'
import Router from './Router';
import Minicart from './components/minicart'
import { CartStorage } from './context/CartContext'


const App = () => {
    return ( 
        <>
            <CartStorage>
                <Header />
                <main>
                    <Router />
                </main>
                <Footer />

                <Minicart /> 
            </CartStorage>
        </>
    );
}

export default App;

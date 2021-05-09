import React from 'react';
import './reset.css';
import './App.scss'
import Header from './components/header'
import Footer from './components/footer'
import Router from './Router';


const App = () => {
    return ( 
        <>
            <Header />
            <main>
                <Router />
            </main>
            <Footer />
        </>
    );
}

export default App;

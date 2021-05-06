import React from 'react'
import './styles.scss';
import logoImage from './images/logo-header.png';

const menu = [
    'home',
    'about',
    'special',
    'popular'
]

const Header = () => {
    return(
        <header className="food-header">
            <div className="food-header--wrapper">
                <span>
                    <img src={logoImage} />
                </span>
                <div className="food-menu">
                    <ul>
                        {menu.map( item => <li key={item}>{item}</li>)}
                    </ul>
                </div>

                <button>login</button>
            </div>
        </header>
    )
}

export default Header

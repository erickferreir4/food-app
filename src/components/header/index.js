import React from 'react'
import './styles.scss';
import {Link} from 'react-router-dom'
import motoIcon from './images/header-moto-icon.png'
import logo from './images/logo-header.png'

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
                    <Link to='/'><img src={logo} /></Link>
                </span>

                <div className="food-header--menu">
                    <ul>
                        {menu.map( item => <li key={item}><a href="#">{item}</a></li>)}
                    </ul>
                    <span className="food-header--moto">
                        <img src={motoIcon} />
                    </span>
                </div>
                
                <div className="food-header--wrapper-content">
                    <span className="food-header--help">
                        <p>Need Help?</p>
                        <strong>12345</strong>

                    </span>
                    <button className="food-header--button">Login</button>
                </div>

            </div>
        </header>
    )
}

export default Header

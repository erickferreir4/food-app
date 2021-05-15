import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom'
import logo from './images/logo-footer.png'

const menu = [
    'home',
    'about',
    'special',
    'popular'
]


const Footer = () => {
    return(
        <footer>
            <div className="food-footer">
                <div className="food-footer--wrapper">
                    <span>
                        <Link to='/'><img src={logo} /></Link>
                    </span>
                    
                    <ul className="food-footer--menu">
                        {menu.map( item => (
                            <li key={item}><a href="#">{item}</a></li>
                        ))}
                    </ul>

                    <p>Khadyo || All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';
import './styles.scss'

const Lazy = () => {

    return(
        <div className="food-menu">
            <div className="food-menu--wrapper">
                <span className="food-menu--wrapper-content">
                    <h3>food items</h3>
                    <h2>Popular <strong>Menu</strong></h2>
                </span>
                <nav className="food-menu--nav">
                    <ul>
                        <li className="is--lazy lazy--menu"></li>
                        <li className="is--lazy lazy--menu"></li>
                        <li className="is--lazy lazy--menu"></li>
                        <li className="is--lazy lazy--menu"></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Lazy

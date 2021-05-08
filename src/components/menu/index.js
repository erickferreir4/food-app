import React from 'react';
import './styles.scss'

const menuItems =[
    {
        id: 1,
        name: 'Pizza'
    },
    {
        id: 2,
        name: 'Pizza'
    },
    {
        id: 3,
        name: 'Pizza'
    },
    {
        id: 4,
        name: 'Pizza'
    },
    {
        id: 5,
        name: 'Pizza'
    },
    {
        id: 6,
        name: 'Pizza'
    },
    {
        id: 7,
        name: 'Pizza'
    },
    {
        id: 8,
        name: 'Pizza'
    },
]



const Menu = () => {
    return(
        <div className="food-menu">
            <div className="food-menu--wrapper">
                <span className="food-menu--wrapper-content">
                    <h3>food items</h3>
                    <h2>Popular <strong>Menu</strong></h2>
                </span>
                <nav className="food-menu--nav">
                    <ul>
                        {menuItems.map( ({name, id}) => (
                            <li key={id}><a href="#">{name}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu

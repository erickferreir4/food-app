import React from 'react';
import './styles.scss'
import { HomeContext } from './../../context/HomeContext'
import Lazy from './Lazy'

const Menu = () => {

    const {menu, getItems, menuActive, menuLoading} = React.useContext(HomeContext)

    async function handleClick(ev) {
        ev.preventDefault()
        let search = ev.target.innerText.toLowerCase()
        getItems(search)
    }

    if(menuLoading) return <Lazy />

    return(
        <div className="food-menu">
            <div className="food-menu--wrapper">
                <span className="food-menu--wrapper-content">
                    <h3>food items</h3>
                    <h2>Popular <strong>Menu</strong></h2>
                </span>
                <nav className="food-menu--nav">
                    <ul>
                        {menu.map( ({name, id}) => (
                            <li className={name == menuActive ? 'is--active' : null} key={id}>
                                <a href="#" onClick={handleClick}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu

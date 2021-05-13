import React from 'react';
import './styles.scss';
import {HomeContext} from './../../context/HomeContext'
import {Link} from 'react-router-dom'
import Lazy from './Lazy'

const Items = () => {

    const {menuItem, menuItemLoading} = React.useContext(HomeContext)

    if(menuItemLoading) return <Lazy />

    const hostname = 'http://'+window.location.hostname+':8000'

    return(
        <div className="food-items">
            <div className="food-items--wrapper">
                <ul className="food-items--items">
                    {menuItem.map( ({name, id, price, category, img, url}) => (
                        <li className="food-items--item" key={id}>
                            <Link to={url}>
                                <span><img src={hostname+img} title={name}/></span>
                                <span>
                                    <h3>{name}</h3>
                                    <p>${price}</p>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Items

import React from 'react';
import './styles.scss';
import imgProd from './imagens/item-img.jpeg'
import {HomeContext} from './../../context/HomeContext'
import {Link} from 'react-router-dom'


const allItems = [
    {
        id: 1,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 2,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 3,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 4,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 5,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 6,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 7,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 8,
        name: 'Classic Chicken Burger',
        price: '10.00',
        category: 'Pizza',
        img: imgProd
    },
]


const Items = () => {

    const {menuItem} = React.useContext(HomeContext)

    return(
        <div className="food-items">
            <div className="food-items--wrapper">
                <ul className="food-items--items">
                    {menuItem.map( ({name, id, price, category, img, url}) => (
                        <li className="food-items--item" key={id}>
                            <Link to={url}>
                                <span><img src={imgProd} title={name}/></span>
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

import React from 'react';
import './styles.scss';
import imgProd from './imagens/item-img.jpeg'

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
    return(
        <div className="food-items">
            <div className="food-items--wrapper">
                <ul className="food-items--items">
                    {allItems.map( ({name, id, price, category, img}) => (
                        <li className="food-items--item" key={id}><a href="#">
                            <span><img src={img} title={name}/></span>
                            <span>
                                <h3>{name}</h3>
                                <p>${price}</p>
                            </span>
                        </a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Items

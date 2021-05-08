import React from 'react';
import './styles.scss';
import imgProd from './imagens/imgProd.jpeg'

const shelfItems = [
    {
        id: 1,
        name: 'The Yammy Chocolate',
        price: '15.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 2,
        name: 'The Yammy Chocolate',
        price: '15.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 3,
        name: 'The Yammy Chocolate',
        price: '15.00',
        category: 'Pizza',
        img: imgProd
    },
    {
        id: 4,
        name: 'The Yammy Chocolate',
        price: '15.00',
        category: 'Pizza',
        img: imgProd
    },
]



const Shelf = () => {
    return(
        <div className="food-shelf">
            <div className="food-shelf--wrapper">
                <h2>Explore Our <strong>Special Menu</strong></h2>
                
                <ul className="food-shelf--items">
                    {shelfItems.map( ({name, id, category, img, price}) => (
                        <li className="food-shelf--item"><a href="#">
                            <span><img src={img} /></span>
                            <h3>{name}</h3>
                            <p>${price}</p>
                        </a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Shelf;

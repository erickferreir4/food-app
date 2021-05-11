import React from 'react';
import './styles.scss';
import imgProd from './imagens/imgProd.jpeg'
import {Link} from 'react-router-dom';

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



const Shelf = (props) => {

    return(
        <div className="food-shelf">
            <div className="food-shelf--wrapper">
                <h2>{props.title}</h2>
                
                <ul className="food-shelf--items">
                    {props.items.map( ({name, id, category, img, price, url}) => (
                        <li key={id} className="food-shelf--item">
                            <Link to={url}>
                                <span><img src={imgProd} /></span>
                                <h3>{name}</h3>
                                <p>${price}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Shelf;

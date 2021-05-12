import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

const Shelf = (props) => {

    return(
        <div className="food-shelf">
            <div className="food-shelf--wrapper">
                <h2>{props.title}</h2>
                
                <ul className="food-shelf--items">
                    {props.items.map( ({name, id, category, img, price, url}, index) => (
                        <li key={index} className="food-shelf--item">
                            <Link to={url}>
                                <span><img src={img} /></span>
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

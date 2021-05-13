import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import Lazy from './Lazy'

const Shelf = (props) => {

    if(props.loading) return <Lazy />

    const hostname = 'http://'+window.location.hostname+':8000'


    return(
        <div className="food-shelf">
            <div className="food-shelf--wrapper">
                <h2>{props.title}</h2>
                
                <ul className="food-shelf--items">
                    {props.items.map( ({name, id, category, img, price, url}, index) => (
                        <li key={index} className="food-shelf--item">
                            <Link to={url}>
                                <span><img src={hostname+img} /></span>
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

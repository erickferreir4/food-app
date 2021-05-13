import React from 'react';
import './styles.scss'
import Lazy from './Lazy'
import {HomeContext} from './../../context/HomeContext'
import {Link} from 'react-router-dom';

const Category = () => {

    const {mosaico, mosaicoLoading} = React.useContext(HomeContext)
    const hostname = 'http://'+window.location.hostname+':8000'

    if(mosaicoLoading) return <Lazy />

    return(
        <div className="food-category">
            <div className="food-category--wrapper">
                <ul className="food-category--box">
                    {mosaico.map( ({link, name, img, description, id}) => (
                        <li className="food-category--item" key={id}>
                            <Link to={link}>
                                <img src={hostname+img} />
                                <span>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category

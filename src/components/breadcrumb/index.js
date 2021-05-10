import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

const Breadcrumb = ({category, item}) => {
    return(
        <div className="food-breadcrumb">
            <ul className="food-breadcrumb--wrapper">
                <li><Link to="/">Khadyo</Link></li>
                <li className="food-breadcrumb--next">{'>'}</li>
                <li>{category}</li>
                <li className="food-breadcrumb--next">{'>'}</li>
                <li>{item}</li>
            </ul>
        </div>
    )
}

export default Breadcrumb

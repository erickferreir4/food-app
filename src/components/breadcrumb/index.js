import React from 'react';
import './styles.scss';

const Breadcrumb = ({category, item}) => {
    return(
        <div className="food-breadcrumb">
            <ul className="food-breadcrumb--wrapper">
                <li>{category}</li>
                <li className="food-breadcrumb--next">{'>'}</li>
                <li>{item}</li>
            </ul>
        </div>
    )
}

export default Breadcrumb

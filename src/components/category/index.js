import React from 'react';
import './styles.scss'

import grid1 from './imagens/grid1.jpeg'
import grid2 from './imagens/grid2.jpeg'


const grid = [
    {
        id: 1,
        title: 'Buzzed Burger',
        description: 'Sale off 50% only this week',
        img: grid1,
        link: ''
    },
    {
        id: 2,
        title: 'Buzzed Burger',
        description: '',
        img: grid2,
        link: ''
    },
    {
        id: 3,
        title: 'Buzzed Burger',
        description: '',
        img: grid2,
        link: ''
    },
    {
        id: 6,
        title: 'Buzzed Burger',
        description: '',
        img: grid2,
        link: ''
    },
    {
        id: 7,
        title: 'Buzzed Burger',
        description: '',
        img: grid2,
        link: ''
    },
    {
        id: 5,
        title: 'Buzzed Burger',
        description: 'Sale off 50% only this week',
        img: grid1,
        link: ''
    },
]



const Category = () => {
    return(
        <div className="food-category">
            <div className="food-category--wrapper">
                <ul className="food-category--box">
                    {grid.map( ({title, img, description, id}) => (
                        <li className="food-category--item" key={id}><a href="#">
                            <img src={img} />
                            <span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </span>
                        </a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category

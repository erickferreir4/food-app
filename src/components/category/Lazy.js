import React from 'react';
import './styles.scss'

const Lazy = () => {
    return(
        <div className="food-category">
            <div className="food-category--wrapper">
                <ul className="food-category--box">
                    <li className="is--lazy banner--lazy"></li>
                    <li className="is--lazy banner--lazy"></li>
                    <li className="is--lazy banner--lazy"></li>
                    <li className="is--lazy banner--lazy"></li>
                    <li className="is--lazy banner--lazy"></li>
                    <li className="is--lazy banner--lazy"></li>
                </ul>
            </div>
        </div>
    )
}

export default Lazy

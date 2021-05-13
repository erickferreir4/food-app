import React from 'react';
import './styles.scss';

const Lazy = () => {

    return(
        <div className="food-items">
            <div className="food-items--wrapper">
                <ul className="food-items--items">
                    <li className="is--lazy item--lazy"></li>
                    <li className="is--lazy item--lazy"></li>
                    <li className="is--lazy item--lazy"></li>
                    <li className="is--lazy item--lazy"></li>
                    <li className="is--lazy item--lazy"></li>
                    <li className="is--lazy item--lazy"></li>
                </ul>
            </div>
        </div>
    )
}

export default Lazy

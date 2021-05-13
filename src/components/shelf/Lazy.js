import React from 'react';
import './styles.scss';

const Lazy = () => {
    return(
        <div className="food-shelf">
            <div className="food-shelf--wrapper">
                <h2 className="is--lazy lazy--title"></h2>
                
                <ul className="food-shelf--items">
                    <li className="is--lazy lazy--shelf" ></li>
                    <li className="is--lazy lazy--shelf" ></li>
                    <li className="is--lazy lazy--shelf" ></li>
                    <li className="is--lazy lazy--shelf" ></li>
                </ul>
            </div>
        </div>
    )
}

export default Lazy;

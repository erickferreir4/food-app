import React from 'react';
import './styles.scss';

const Main = () => {

    return(
        <div className="food-main">
            <div className="food-main--wrapper">
                <div className="food-main--left">
                    <h3>Best In Town</h3>
                    <h1>enjoy our chicken burger fast food </h1>
                    <h2>Bacon-Potatos-Bbq Sauce</h2>
                    <button>Order Here</button>
                </div>

                <div className="food-main--right">
                    <span><img src="/images/burger-promo.png" /></span> 
                </div>
            </div>
        </div>
    )
}


export default Main

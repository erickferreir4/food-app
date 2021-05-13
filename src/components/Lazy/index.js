import React from 'react';

const Lazy = () => {
    return(
        <div className="food-shelf">
            <div className="food-shelf--wrapper">
                <h2>loading...</h2>
                
                <ul className="food-shelf--items">
                    <li className="is--lazy" style={{height: '340px', width:'250px' }}></li>
                    <li className="is--lazy" style={{height: '340px', width:'250px' }}></li>
                    <li className="is--lazy" style={{height: '340px', width:'250px' }}></li>
                    <li className="is--lazy" style={{height: '340px', width:'250px' }}></li>
                </ul>
            </div>
        </div>
    )
}

export default Lazy;

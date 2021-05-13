import React from 'react';
import './styles.scss';
import Shelf from './../../components/shelf'

const Lazy = () => {

    return(
        <div className="food-product">
            <div className="food-product--wrapper">

                <div className="food-product--item">
                    <div className="food-product--box">
                        <div className="food-product--img">
                            <span className="is--lazy img--lazy">
                            </span>
                        </div>
                    </div>

                    <div className="food-product--box">
                        <div className="is--lazy info--lazy">
                        </div>
                    </div>
                </div>
            </div>

            <Shelf loading={true}/>
        </div>
    )
}

export default Lazy;

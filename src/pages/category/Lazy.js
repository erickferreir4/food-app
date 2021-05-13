import React from 'react';
import './styles.scss';
import Shelf from './../../components/shelf'

const Lazy = () => {

    return(
        <div className="food-category-page">
            <div className="food-category-page--wrapper">
            </div>
            <Shelf loading={true} />
        </div>
    )
}

export default Lazy

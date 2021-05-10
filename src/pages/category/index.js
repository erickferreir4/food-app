import React from 'react';
import './styles.scss';
import { CategoryStorage } from './../../context/CategoryContext'

const CategoryPage = () => {
    return(
        <div>category</div>
    )
}

const Category = () => {
    return(
        <CategoryStorage>
            <CategoryPage/>
        </CategoryStorage>
    )
}

export default Category

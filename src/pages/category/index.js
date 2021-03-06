import React from 'react';
import './styles.scss';
import { CategoryStorage, CategoryContext } from './../../context/CategoryContext'
import Shelf from './../../components/shelf'
import Breadcrumb from './../../components/breadcrumb'
import Lazy from './Lazy'

const CategoryPage = () => {

    const {items, title, loading} = React.useContext(CategoryContext)

    if( loading ) return <Lazy />

    return(
        <div className="food-category-page">
            <div className="food-category-page--wrapper">
                <Breadcrumb category={title} />
            </div>
            <Shelf items={items} title={title} />
        </div>
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

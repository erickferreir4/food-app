import React from 'react';
import './styles.scss';
import Breadcrumb from './../../components/breadcrumb'
import Shelf from './../../components/shelf'
import {ProductStorage, ProductContext} from './../../context/ProductContext'
import { CartContext } from './../../context/CartContext'
import Lazy from './Lazy'

const ProductPage = () => {

    const {product, shelf, shelfTitle, productLoading} = React.useContext(ProductContext)
    const {addItem, cartItems, incartLoad} = React.useContext(CartContext)


    function handleClick(ev) {
        addItem(product.id)
    }

    if(productLoading) return <Lazy />

    return(
        <div className="food-product">
            <div className="food-product--wrapper">

                <Breadcrumb category={product.category} item={product.name}/>
            
                <div className="food-product--item">
                    <div className="food-product--box">
                        <div className="food-product--img">
                            <span>
                                <img src={product.img} />
                            </span>
                        </div>
                    </div>

                    <div className="food-product--box">
                        <div className="food-product--info">
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <button className={incartLoad ? 'food-product--load' : ''} onClick={handleClick}>
                                {cartItems.filter( item => item.id === product.id).length ? 
                                    'in Cart'
                                    : 'buy'}
                            </button>

                            <span>
                                <h3>Description</h3>
                                {product.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Shelf items={shelf} title={shelfTitle}/>
        </div>
    )
}


const Product = () => {
    return(
            <ProductStorage>
                <ProductPage />
            </ProductStorage>
    )
}

export default Product;

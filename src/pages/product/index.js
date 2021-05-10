import React from 'react';
import './styles.scss';
import Breadcrumb from './../../components/breadcrumb'
import Shelf from './../../components/shelf'
import {ProductStorage, ProductContext} from './../../context/ProductContext'
import imgItem from './imagens/item-img.jpeg'

const item = {
    id: 1,
    name: 'Set Menu Special',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    price: 10.10,
    category: 'pizza',
    img: imgItem,
    url: '/product/Set Menu Special---1'

}

const ProductPage = () => {

    const {product, shelf} = React.useContext(ProductContext)

    return(
        <div className="food-product">
            <div className="food-product--wrapper">

                <Breadcrumb category={product.category} item={product.name}/>
            
                <div className="food-product--item">
                    <div className="food-product--box">
                        <div className="food-product--img">
                            <span>
                                <img src={imgItem} />
                            </span>
                        </div>
                    </div>

                    <div className="food-product--box">
                        <div className="food-product--info">
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <button>buy</button>

                            <span>
                                <h3>Description</h3>
                                {product.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Shelf items={shelf}/>
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

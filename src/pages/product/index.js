import React from 'react';
import './styles.scss';
import imgItem from './imagens/item-img.jpeg'
import Breadcrumb from './../../components/breadcrumb'

const item = {
        id: 1,
        name: 'Set Menu Special',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        price: 10.10,
        category: 'pizza',
        img: imgItem
}


const Product = () => {
    return(
        <div className="food-product">
            <div className="food-product--wrapper">

                <Breadcrumb category={item.category} item={item.name}/>
            
                <div className="food-product--item">
                    <div className="food-product--box">
                        <div className="food-product--img">
                            <span>
                                <img src={item.img} />
                            </span>
                        </div>
                    </div>

                    <div className="food-product--box">
                        <div className="food-product--info">
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <button>buy</button>

                            <span>
                                <h3>Description</h3>
                                {item.description}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product;

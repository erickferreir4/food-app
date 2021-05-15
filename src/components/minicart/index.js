import React from 'react';
import './styles.scss'
import { CartContext } from './../../context/CartContext'
import img from './images/shopping-cart.png'

const Minicart = () => {

    const { cartItems, value, vat, removeItem } = React.useContext(CartContext)
    const [iscart, setIscart] = React.useState(false)

    return(
        <div className="food-minicart">
            <div className={iscart ? "food-minicart--wrapper is--active" : "food-minicart--wrapper"}>
                <span className="food-minicart--close">
                    Khadyo Restaurant 
                    <button onClick={() => setIscart(false)}>+</button>
                </span>
                <div className="food-minicart--items--wrapper">
                    {cartItems.length ? 
                    <ul className="food-minicart--items">
                        {cartItems.map( (item, index)=> (
                            <li key={index}>
                                <button 
                                    onClick={() => removeItem(item.id)}
                                    className="food-minicart--remove">+</button>
                                <span>
                                    <img src={item.img} />
                                </span>
                                <span>
                                    <p>{item.name}</p>
                                    <strong>${item.price}</strong>
                                </span>
                            </li>
                        ))}
                    </ul>
                    : <p>No item added</p> }

                </div>
                <div>
                <div className="food-minicart--value">
                    <span>
                        <p>Subtotal</p>
                        <p>${value.toFixed(2)}</p>
                    </span>
                    <span>
                        <p>Vat(10%)</p>
                        <p>${vat.toFixed(2)}</p>
                    </span>
                    <span>
                        <p>Total</p>
                        <p>${(value + vat).toFixed(2)}</p>
                    </span>
                </div>
                <button 
                    className="food-minicart--checkout">Checkout</button>
                </div>
            </div>

            <div className="food-minicart--button">
                <div 
                    onClick={() => setIscart(true)}
                    className="food-minicart--button--wrapper">
                    <span className="food-minicart-qty"><img src={img} />
                        {cartItems.length}{cartItems.length > 1 ? ' items' : ' item'}
                    </span>  
                    <span className="food-minicart-value">${value.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default Minicart

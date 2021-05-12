import React from 'react';

const CartContext = React.createContext(null)

const CartStorage = ({children}) => {

    const [cartItems, setCartItems] = React.useState([])
    const [value, setValue] = React.useState(0)
    const [vat, setVat] = React.useState(0)

    React.useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems') || '[]'))
    }, [])

    React.useEffect(() => {

        let tot = cartItems.reduce((acc, obj) => {
            return acc + obj.price
        }, 0)

        setValue(tot)
        setVat( tot / 100 * 10)

    }, [cartItems])

    async function addItem(id) {

        //let response = await fetch(`http://localhost:3000/products/${id}`)
        let response = await fetch(`http://localhost:8000/api/products?id=${id}`)
        let json = await response.json()

        if( cartItems.filter(item => item.id === json.id).length ) return

        const items = [...cartItems, json[0]]
        setCartItems(items)
        localStorage.setItem('cartItems', JSON.stringify(items))
    }

    function removeItem(id) {
        let items = cartItems.filter(item => item.id !== id)
        setCartItems(items)
        localStorage.setItem('cartItems', JSON.stringify(items))
    }

    return(
        <CartContext.Provider value={{cartItems, addItem, value, vat, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartStorage}

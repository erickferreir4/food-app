import React from 'react';

const CartContext = React.createContext(null)

const CartStorage = ({children}) => {

    const [cartItems, setCartItems] = React.useState([])
    const [value, setValue] = React.useState(0)
    const [vat, setVat] = React.useState(0)
    const [incartLoad, setIncartLoad] = React.useState(false)

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

        if( cartItems.filter(item => item._id === id ).length ) return

        setIncartLoad(true)
        let response = await fetch(`/api/v1/products/id/${id}`)
        let json = await response.json()
        setIncartLoad(false)

        if( cartItems.filter(item => item._id === json._id ).length ) return

        const items = [...cartItems, json]
        setCartItems(items)
        localStorage.setItem('cartItems', JSON.stringify(items))
    }

    function removeItem(id) {
        let items = cartItems.filter(item => item._id !== id)
        setCartItems(items)
        localStorage.setItem('cartItems', JSON.stringify(items))
    }

    return(
        <CartContext.Provider value={{cartItems, addItem, value, vat, removeItem, incartLoad}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartStorage}

import React from 'react';

const CartContext = React.createContext(null)

const CartStorage = ({children}) => {

    const [cartItems, setCartItems] = React.useState([])
    const [value, setValue] = React.useState(0)


    React.useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems') || '[]'))
    }, [])

    React.useEffect(() => {
        cartItems.forEach( item => setValue(value+item.price) )
    }, [cartItems])

    async function addItem(id) {

        let response = await fetch(`http://localhost:3000/products/${id}`)
        let json = await response.json()

        if( cartItems.filter(item => item.id === json.id).length ) return

        const items = [...cartItems, json]
        setCartItems(items)
        localStorage.setItem('cartItems', JSON.stringify(items))
        console.log(JSON.parse(localStorage.getItem('cartItems')))
    }

    return(
        <CartContext.Provider value={{cartItems, addItem, value}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartStorage}

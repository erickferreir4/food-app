import React from 'react'
import { useLocation } from 'react-router-dom'

export const ProductContext = React.createContext(null);

export const ProductStorage = ({children}) => {

    const [product, setProduct] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [shelf, setShelf] = React.useState(null)
    const [shelfTitle, setShelfTitle] = React.useState(null)
    const location = useLocation()

    const search = window.location.search.replace(/\?/g, '')

    React.useEffect(async () => {
        setLoading(true)
        let response = await fetch(`http://localhost:3000/products?url=/product?${search}`)
        let json = await response.json()
        setProduct(json[0])


        response = await fetch(`http://localhost:3000/products?category=special menu`)
        json = await response.json()
        setShelf(json)
        setShelfTitle('special menu')

        setLoading(false)
    }, [location]) 

    if(loading) {
        return <p>loading....</p>
    }

    return (
        <ProductContext.Provider value={{product, shelf, shelfTitle}}>
            {children} 
        </ProductContext.Provider>
    )
}

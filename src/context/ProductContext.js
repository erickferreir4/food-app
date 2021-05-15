import React from 'react'
import { useLocation } from 'react-router-dom'

export const ProductContext = React.createContext(null);

export const ProductStorage = ({children}) => {

    const location = useLocation()
    const [product, setProduct] = React.useState(null)
    const [shelf, setShelf] = React.useState(null)
    const [shelfTitle, setShelfTitle] = React.useState(null)
    const [productLoading, setProductLoading] = React.useState(true)

    const search = window.location.search.replace(/\?/g, '')

    React.useEffect(async () => {

        setProductLoading(true)

        let response = await fetch(`/api/products?url=/product?${search}`)
        let json = await response.json()
        setProduct(json[0])

        response = await fetch(`/api/products?category=special%20menu`)
        json = await response.json()
        setShelf(json)
        setShelfTitle('special menu')


        setProductLoading(false)

    }, [location]) 

    return (
        <ProductContext.Provider value={{
                    product,
                    shelf,
                    productLoading,
                    shelfTitle}}>

            {children} 
        </ProductContext.Provider>
    )
}

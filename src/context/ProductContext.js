import React from 'react'
import { useLocation } from 'react-router-dom'

export const ProductContext = React.createContext(null);

export const ProductStorage = ({children}) => {

    const location = useLocation()
    const [product, setProduct] = React.useState(null)
    const [shelf, setShelf] = React.useState(null)
    const [shelfTitle, setShelfTitle] = React.useState(null)
    const [productLoading, setProductLoading] = React.useState(true)

    const search = window.location.hash.match(/\/.*\/p$/)[0].replace(/p$|\//g, '')

    React.useEffect(async () => {

        setProductLoading(true)

        let response = await fetch(`${process.env.API_URL}/products/name/${search}`)
        let json = await response.json()
        setProduct(json)

        response = await fetch(`${process.env.API_URL}/products/category/${json.category}`)
        json = await response.json()
        setShelf(json)
        setShelfTitle(json[0].category)


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

import React from 'react'

export const ProductContext = React.createContext(null);

export const ProductStorage = ({children}) => {

    const [product, setProduct] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [shelf, setShelf] = React.useState(null)

    const search = window.location.search.replace(/\?/g, '')

    React.useEffect(async () => {
        setLoading(true)
        let response = await fetch(`http://localhost:3000/products?url=/product?${search}`)
        let json = await response.json()
        setProduct(json[0])


        response = await fetch(`http://localhost:3000/products?category=special menu`)
        json = await response.json()
        setShelf(json)

        setLoading(false)
    }, []) 

    if(loading) {
        return <p>loading....</p>
    }

    return (
        <ProductContext.Provider value={{product, shelf}}>
            {children} 
        </ProductContext.Provider>
    )
}

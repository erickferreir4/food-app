import React from 'react';

export const HomeContext = React.createContext(null)

export const HomeStorage = ({children}) => {

    const [loading, setLoading] = React.useState(true)
    const [menu, setMenu] = React.useState(null)
    const [menuItem, setMenuItem] = React.useState(null)
    const [menuActive, setMenuActive] = React.useState(null)
    const [shelf, setShelf] = React.useState(null)
    const [shelfTitle, setShelfTitle] = React.useState(null)

    React.useEffect( async () => {
        setLoading(true)
        //let response = await fetch(`http://localhost:3000/categories`)
        let response = await fetch(`http://localhost:8000/api/categories`)
        let json = await response.json()
        setMenu(json)


        //response = await fetch(`http://localhost:3000/products?category=${json[0]?.name}`)
        response = await fetch(`http://localhost:8000/api/products?category=${json[0]?.name}`)
        json = await response.json()
        setMenuItem(json)
        setMenuActive(json[0]?.category)


        //response = await fetch(`http://localhost:3000/products?category=special menu`)
        response = await fetch(`http://localhost:8000/api/products?category=special menu`)
        json = await response.json()
        setShelf(json)
        setShelfTitle('special menu')




        setLoading(false)
    }, [])

    async function getItems(search) {
        //let response = await fetch(`http://localhost:3000/products?category=${search}`)
        let response = await fetch(`http://localhost:8000/api/products?category=${search}`)
        let json = await response.json()
        setMenuItem(json)
        setMenuActive(search)
    }


    if(loading) {
        return <div>loading...</div>
    }

    return(
        <HomeContext.Provider value={{
                menu: menu,
                getItems,
                menuActive,
                menuItem,
                shelf,
                shelfTitle
            }}>

            {children}
        </HomeContext.Provider>
    )
}


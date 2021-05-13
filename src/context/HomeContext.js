import React from 'react';

export const HomeContext = React.createContext(null)

export const HomeStorage = ({children}) => {

    const [menu, setMenu] = React.useState(null)
    const [menuItem, setMenuItem] = React.useState(null)
    const [menuActive, setMenuActive] = React.useState(null)
    const [shelf, setShelf] = React.useState(null)
    const [shelfTitle, setShelfTitle] = React.useState(null)

    const [loading, setLoading] = React.useState(true)
    const [shelfLoading, setShelfLoading] = React.useState(true)
    const [menuLoading, setMenuLoading] = React.useState(true)
    const [menuItemLoading, setMenuItemLoading] = React.useState(true)
    const [mosaico, setMosaico] = React.useState(true)
    const [mosaicoLoading, setMosaicoLoading] = React.useState(true)

    React.useEffect( async () => {

        setMenuLoading(true)
        setMosaicoLoading(true)
        //let response = await fetch(`http://localhost:3000/categories`)
        let response = await fetch(`http://localhost:8000/api/categories`)
        let json = await response.json()
        setMenu(json)
        setMosaico(json)
        setMosaicoLoading(false)
        setMenuLoading(false)


        setMenuItemLoading(true)
        //response = await fetch(`http://localhost:3000/products?category=${json[0]?.name}`)
        response = await fetch(`http://localhost:8000/api/products?category=${json[0]?.name}`)
        json = await response.json()
        setMenuItem(json)
        setMenuActive(json[0]?.category)
        setMenuItemLoading(false)

    }, [])

    React.useEffect( async () => {

        setShelfLoading(true)
        //response = await fetch(`http://localhost:3000/products?category=special menu`)
        let response = await fetch(`http://localhost:8000/api/products?category=special menu`)
        let json = await response.json()
        setShelf(json)
        setShelfTitle('special menu')
        setShelfLoading(false)

    }, [])



    async function getItems(search) {
        setMenuActive(search)
        setMenuItemLoading(true)
        //let response = await fetch(`http://localhost:3000/products?category=${search}`)
        let response = await fetch(`http://localhost:8000/api/products?category=${search}`)
        let json = await response.json()
        setMenuItem(json)
        setMenuItemLoading(false)
    }

    return(
        <HomeContext.Provider value={{
                menu: menu,
                getItems,
                menuActive,
                menuItem,
                shelf,
                shelfTitle,
                shelfLoading,
                menuLoading,
                menuItemLoading,
                mosaicoLoading,
                mosaico
            }}>

            {children}
        </HomeContext.Provider>
    )
}


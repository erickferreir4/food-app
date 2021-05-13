import React from 'react';
import {useLocation} from 'react-router-dom'

const CategoryContext = React.createContext(null)

const CategoryStorage = ({children}) => {

    const location = useLocation()
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState(null);
    const [title, setTitle] = React.useState(null)

    const {hostname, search} = window.location

    React.useEffect( async () => {
        setLoading(true)

        //let uri = `http://localhost:3000/products${search.length ? `?category=${search.replace(/\?/g, '')}` : ''}`
        let uri = `http://${hostname}:8000/api/products${search.length ? `?category=${search.replace(/\?/g, '')}` : ''}`
        let response = await fetch(uri)
        let json = await response.json()

        setItems(json)
        setTitle(search.replace(/\?/g, ''))


        setLoading(false)
    }, [location])


    return(
        <CategoryContext.Provider value={{
                                        items,
                                        title,
                                        loading
                                    }}>
            {children}
        </CategoryContext.Provider>
    )
}


export {CategoryContext, CategoryStorage}

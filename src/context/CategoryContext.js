import React from 'react';
import {useLocation} from 'react-router-dom'

const CategoryContext = React.createContext(null)

const CategoryStorage = ({children}) => {

    const { search } = useLocation()
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState(null);
    const [title, setTitle] = React.useState(null)

    console.log(search)

    React.useEffect( async () => {
        setLoading(true)

        let uri = `http://localhost:3000/products${search.length ? `?category=${search.replace(/\?/g, '')}` : ''}`
        let response = await fetch(uri)
        let json = await response.json()

        setItems(json)
        setTitle(search.replace(/\?/g, ''))


        setLoading(false)
    }, [search])

    if(loading) {
        return(
            <div>loading...</div>
        )
    }

    return(
        <CategoryContext.Provider value={{
                                        items,
                                        title
                                    }}>
            {children}
        </CategoryContext.Provider>
    )
}


export {CategoryContext, CategoryStorage}

import React from 'react';
import {useLocation} from 'react-router-dom'

const CategoryContext = React.createContext(null)

const CategoryStorage = ({children}) => {

    const { search } = useLocation()
    const [loading, setLoading] = React.useState(true);
    const [category, setCategory] = React.useState(null);

    console.log(search)

    React.useEffect( async () => {

        setLoading(true)

            
        let response = await fetch(`http://localhost:3000/products?category=${search.replace(/\?/g, '')}`)
        let json = await response.json()
        setCategory(json[0])

        console.log(json)

        setLoading(false)

    }, [search])


    return(
        <CategoryContext.Provider value={
                                    category
                                }>
            {children}
        </CategoryContext.Provider>
    )
}


export {CategoryContext, CategoryStorage}

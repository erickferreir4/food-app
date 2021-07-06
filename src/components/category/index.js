import React from 'react';
import './styles.scss'
import Lazy from './Lazy'
import {HomeContext} from './../../context/HomeContext'
import {Link} from 'react-router-dom';
import grid1 from './images/grid1.jpeg'
import grid2 from './images/grid2.jpeg'

const Category = () => {

    const {mosaico, mosaicoLoading} = React.useContext(HomeContext)

    if(mosaicoLoading) return <Lazy />

    return(
        <div className="food-category">
            <div className="food-category--wrapper">
                <ul className="food-category--box">
                    {mosaico.map( ({link, name, img, description, _id}) => (
                        <li className="food-category--item" key={_id}>
                            <Link to={link}>
                                <img src={img} />
                                <span>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category


//{"name":"special menu","description": "Sale off 50% only this week","link":"" ,"img":"http://via.placeholder.com/570x240"}
//{"name":"pizza","description": "Sale off 50% only this week","link":"" ,"img":"http://via.placeholder.com/270x240"},

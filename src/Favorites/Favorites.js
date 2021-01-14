import React, { useContext } from 'react'
import {FavContext} from '../components/Context/FavContext'

const Favorites = () => {

    const context = useContext(FavContext)
    console.log(context.favouriteCity)
    
    return(
        <div>
            <h1>Favorite Cities are: </h1>
            {/* <h1>{context.favouriteCity}</h1> */}
        
        {/* {
            
            context.favouriteCity ? (
                <ul>
                context.favouriteCity.map((fav) => {
                    <li>{fav}</li>
                    
                }
                )
                </ul>
                
            ) : (
                <h1>No cities addded to favorites</h1>
            )
        } */}
        </div>
    )
    
}

export default Favorites

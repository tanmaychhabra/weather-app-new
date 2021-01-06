import React, { Component } from 'react'
import {FavConsumer} from '../components/Context/FavContext'

class Favorites extends Component {
    
    render() {
        
        return (
            
            <FavConsumer>
                {
                  ({favCityData}) => (
                        <h1>City: {favCityData.favCity}</h1>
                    )
                    
                }
            </FavConsumer>
        )
    }
}

export default Favorites

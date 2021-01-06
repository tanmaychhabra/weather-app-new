import React, { Component } from 'react'
import Nav from './Nav'
import Favorites from '../../../Favorites/Favorites'

export class NavFavorites extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Favorites />
            </div>
        )
    }
}

export default NavFavorites

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
        <nav>
            {/* <AppBar className = 'Appbar'>
        <Typography variant = "h6" className = 'app-content'>Current Weather</Typography>
        <Typography variant = "h6" className = 'app-content'>Added Cities</Typography>
      </AppBar> */}
      
      <h3>Weather</h3>
      <ul className = 'nav-links'>
      <Link to = '/'><h3>Current Weather</h3></Link>
      <Link to = '/favorites'><h3>Favourites</h3></Link>
      </ul>
      
        </nav>
        
        <br />
        </div>
    )
}

export default Nav

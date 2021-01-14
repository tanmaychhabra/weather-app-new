import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
//import './Button.css'
import {FavContext} from '../../Context/FavContext'

//import {TempProvider} from '../../Context/Context'
import {Route} from 'react-router-dom'
import Spinner from '../../UI/Spinner/Spinner'


function ButtonDisplay(props) {

    // const favContext = React.createContext()
    // const favProvider = favContext.Provider()
    // const favConsumer = favContext.Consumer()

    let [favouriteCity, setFavouriteCity] = useState([])
    const [cityAdded, setCityAdded] = useState(false)
    const[showSpinner, setShowSpinner] = useState(false)

    // const handleFavouritesNew = () => {

    // setTimeout(function() {
    //     setShowSpinner(true)

    //     if(props.temp!==''){
    //         setCityAdded(true)
    //         favouriteCity.push(props.city)
    //         setFavouriteCity(favouriteCity)

    //         setShowSpinner(false)
    //         console.log(favouriteCity)
    //     }
    // }, 3000);
//}


const tempData = {
    favCity: favouriteCity,
    minimumTemp: props.minTemp,
    maximumTemp: props.maxTemp
}


    const handleFavourites = () => {
        setShowSpinner(true)
        setTimeout(() =>
        { 
            setShowSpinner(false)
            document.getElementById('button').innerHTML = 'Added To Favourites'
            document.getElementById('button').style.backgroundColor = 'green'
        }, 2000);

        if(props.temp!==''){
            setCityAdded(true)
            favouriteCity.push(props.city)
            setFavouriteCity(favouriteCity)

            //setShowSpinner(false)
            console.log(favouriteCity)
        }
    }
    
    return (

        

        <FavContext.Provider value = {{favouriteCity}}>
        
        <React.Fragment>
          <Button variant = 'contained' color = 'secondary' onClick = {props.clicked}>SEARCH</Button>

            {props.buttonPress ?
            
        <div>
            <Card variant = 'outlined' className = "card">
                <CardHeader title = {props.city} subheader = {Date()} >
                 </CardHeader>
              <CardContent>
                <Typography colour = 'text-secondary' variant = 'body1'>
            <h1 className = 'temp_main'> {props.temp}&#176;<sup>c</sup></h1>
            <img src = {"https://openweathermap.org/img/wn/"+props.iconId+"@2x.png"} />
            <b className = 'desc'>{props.description}</b>
            <br />
            <h2 className = 'temp_min'>Today:{props.minTemp}&#176;<sup>c</sup>/{props.maxTemp}&#176;<sup>c</sup></h2>

            <Button id = 'button' variant = 'contained' color = 'primary' onClick = {handleFavourites} disabled = {showSpinner}>ADD TO FAVOURITES</Button>
            {
                showSpinner ?
                <h3>Loading...</h3>
                    //<Spinner/>
                    
                : null
                
            }
            {/* <h2 className = 'temp_max'>Maximum:{maxTemp}&#176;<sup>c</sup></h2> */}
            
            
            </Typography>
            </CardContent>
            </Card>
        </div> : null
            }

        </React.Fragment>
        </FavContext.Provider>
    )
}

export default ButtonDisplay

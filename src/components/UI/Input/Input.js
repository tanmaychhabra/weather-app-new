import React, {useState} from 'react'
import { TextField } from '@material-ui/core'
import ButtonDisplay from '../Button/ButtonDisplay'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import axios from 'axios'
//import {TempConsumer} from '../../Context/Context'

function Input(props) {

    const [city, setCity] = useState('')
    const [currentState, setCurrentState] = useState('')
    const [temp, setTemp] = useState('')
    const [minTemp, setMinTemp] = useState('')
    const [maxTemp, setMaxTemp] = useState('')
    const [clicked, setClicked] = useState(false)
    const[iconId, setIconId] = useState('')
    const[description, setDescription] = useState('')

    // const cityName = props.city
    const APP_ID = 'f3d79a9c4e3c35dafc436299a4eaa7e3'

    const handleButtonClick = (e) => {
    
        setClicked(true)
        
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=imperial`)
             .then(response => {
                 console.log(response.data)
                 const mainTemp = ((response.data.main.temp - 32) * 5/9).toFixed(1)
                 setTemp(mainTemp)

                 const minTemp = ((response.data.main.temp_min - 32) * 5/9).toFixed(1)
                 setMinTemp(minTemp)

                 const maxTemp = ((response.data.main.temp_max - 32) * 5/9).toFixed(1)
                 setMaxTemp(maxTemp)

                 setIconId(response.data.weather[0].icon)

                 const updatedDescription = (response.data.weather[0].description).toUpperCase()
                 setDescription(updatedDescription)

                 
             })
             .catch(error => {
                 alert('No such City found')
             })
            }

    const handleCity = (e) => {
        setClicked(false)
        setCity(e.target.value)
        setTemp('')
        setMinTemp('')
        setMaxTemp('')
        setIconId('')
        setDescription('')
    }

    const handleStateChange = (e) => {
        setCurrentState(e.target.value)
    }

    // const handleClearChange = (e) => {
    //     mainTemp= ''
    //     minTemp = ''
    //     maxTemp = ''
    // }

    return (
       
                        <div>
                        <TextField floatingLabelText = 'City' hintText = 'Enter Your City' onChange = {handleCity} value = {city} />
                        {/* <Select value = {currentState} onChange = {handleStateChange}>
                           <MenuItem value = 'Maharashtra'>Maharashtra</MenuItem>
                           <MenuItem value = 'Gujarat'>Gujarat</MenuItem>
                           <MenuItem value = 'Kerala'>Kerala</MenuItem>
                           <MenuItem value = 'Tamil Nadu'>Tamil Nadu</MenuItem>
                           <MenuItem value = 'Rajasthan'>Rajasthan</MenuItem>
                           <MenuItem value = 'Jammu & Kashmir'>Jammu & Kashmir</MenuItem>
                           <MenuItem value = 'Uttar Pradesh'>Uttar Pradesh</MenuItem>
                           <MenuItem value = 'Chhatisgarh'>Chhatisgarh</MenuItem>
               
                        </Select> */}
                        <ButtonDisplay city = {city} temp = {temp} minTemp = {minTemp} maxTemp = {maxTemp}
                         iconId = {iconId} description = {description} clicked = {handleButtonClick} buttonPress = {clicked}
                         APP_ID = {APP_ID}/>
                        {/* <Button variant = 'contained'onClick ={mainTemp = '', minTemp = '', maxTemp = ''}>Clear</Button> */}
                       </div>
                    )
    }

export default Input

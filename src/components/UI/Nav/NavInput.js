import React, { Component } from 'react'
import Nav from './Nav'
import Input from '../Input/Input'
export class NavInput extends Component {
    render() {
        return (
            <div>
               <Nav />
               <Input />
            </div>
        )
    }
}

export default NavInput

import React from 'react'
import {useLocation} from 'react-router-dom'
import SignIn from '../../pages/Sign-in/Sign-in.component'
import auth from './auth-helper'

const PrivateRoute = ({element}) => {
    const location = useLocation()
    if(auth.isAuthenticated()){
        return(
            element
        )
    }
    else{
        return(
            <SignIn from={location}/>
        )
    }
       

} 
export default PrivateRoute
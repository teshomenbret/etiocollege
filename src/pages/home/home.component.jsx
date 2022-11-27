import React from 'react'
// import './home.style.css'
import homePhoto from './../../assets/unicornbike.jpg'
import auth from '../../api/auth/auth-helper';
import Books from './../book/books.component'

export default function Home(){
     console.log(auth.isAuthenticated())
    return (
        <div className='"container-fluid'>
            <h1 >Home Page</h1>
            <img className='w-100' alt='home page view' src={homePhoto}/>
            <p >Welcome to the ethiocollage home page.</p>
            <hr></hr>
            <Books></Books>
        </div>
        
    )
}


import React from 'react'
import { Link } from 'react-router-dom'
import bookp from '../../../assets/41VbrtgJ2iL.jpg'


export default function BookCard(props){
    return (
        <div className="card">
            <div className="card-header p-0">
                <Link  to = {'/books/'+props.book._id}  className=' col-md-6 col-sm-2 col-sm-6 col-lg-4 col-xl-2'>
                    <img src={bookp} className="card-img-top" alt="placeholder"/>
                </Link>
            </div >
            <div className="card-body p-2">
                <h2 className="card-title">{props.book.name}</h2>
                {props.book.description&&<p className="card-text">{props.book.description.substring(0,100)}<Link to = {'/books/'+props.book._id} >see more</Link></p>}
            </div>
            <div className="card-footer">
                <p className="icons">{props.book.rateing}</p>
            </div >
        </div>
        
    )
}


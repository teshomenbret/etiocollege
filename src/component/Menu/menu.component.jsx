import React from 'react'
// import './menu.style.css'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/SVG/Asset 9 (2).svg"

export default function Menu(){
    return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} className="card-img-top" alt="placeholder"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span >
                    </button>
                    <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className = {({ isActive }) => ( isActive ? "nav-link active" : "nav-link" )} to='/signin'>Sign in</NavLink></li>
                            <li className="nav-item"><NavLink className = {({ isActive }) => ( isActive ? "nav-link active" : "nav-link" )} to='/signup'>Sign up</NavLink></li>
                            <li className="nav-item"><NavLink className = {({ isActive }) => ( isActive ? "nav-link active" : "nav-link" )} to='/books'>Books</NavLink></li>
                            <li className="nav-item"><NavLink className = {({ isActive }) => ( isActive ? "nav-link active" : "nav-link " )} to ='/exams'>Exams</NavLink></li>
                            <li className="nav-item"><NavLink className = {({ isActive }) => ( isActive ? "nav-link active" : "nav-link " )} to ='/pakags'>Packages</NavLink></li>
                            <li className="nav-item"><NavLink className = {({ isActive }) => ( isActive ? "nav-link active" : "nav-link" )} to='/departments'>Departements</NavLink></li>
                        </ul>
                    </div >
                </div>
            </nav> 
    )
}


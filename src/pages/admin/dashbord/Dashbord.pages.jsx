import React from 'react'
// import './menu.style.css'
import { Link} from 'react-router-dom'

export default function Dashbord(){
    return (
                <div className="container">
                    <div className='m-5'>
                        
                            <Link className='list-unstyled m-3 btn btn-lg btn-secondary my-2 text-start'  to='/admin/dashbord/book'>Create Book</Link>
                            <Link className='list-unstyled m-3 btn btn-lg btn-secondary my-2 text-start' to='/admin/dashbord/department'>Create Departement</Link>
                        
                    </div >
                </div>
    )
}


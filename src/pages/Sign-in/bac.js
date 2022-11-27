import React , { useState } from 'react'
// import './Sign-in.style.css'
import {signin} from '../../api/auth/api-auth'
import auth from '../../api/auth/auth-helper';
import {Navigate} from 'react-router-dom'

export default function SignIn(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [navigate, setNavigate] = useState(false);
    const from = props.from|| '/'
    
    const handleSubmit= event => {
        
        event.preventDefault()
        const user = {
            email: email || undefined,
            password: password || undefined
        }
        signin(user).then((data) => {
            if (data.error) {
                setError(data.error);
                setNavigate(false);
            } 
            else {
            auth.authenticate(data, () => {
                setError(data.error);
                setNavigate(true);
                })
            }
        })
    }

    return (
            <div className='container  border m-5 p-5'>
                <form onSubmit={handleSubmit}>
                    <p className="h4">Please Sign In</p>

                    <label className='form-label'>Email:</label>
                    <input className='form-control' onChange = {event => setEmail(event.target.value)} name='email' type="email" value={email} required />
                    
                    <label className='form-label'>password:</label>
                    <input className = {error? "form-control is-invalid" : 'form-control' }  onChange = {event => setPassword(event.target.value)} name='password' type="password" value={password} required/>     
                    <br/>
                    <div  className='invalid-feedback' >
                            <p>{error}</p>
                    </div>
                    <button className="w-25 btn btn-lg btn-primary my-2 text-center" type="submit">Sign in</button>

                </form>

                {
                    navigate && (<Navigate to ={from} />
                    )  
                }
            </div>
    )
}


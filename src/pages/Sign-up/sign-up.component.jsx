import React from 'react'
import { Navigate } from 'react-router';
import {create} from '../../api/user/api-user'
// import './sign-up.style.css'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            name :"",
            email : "",
            password:"",
            error:'',
            navigat:false
        } 
    }
    handleChange = event => { 
        const {value, name} = event.target
        
        this.setState({[name]:value})
    }
    
    handleSubmit= event => { 
        event.preventDefault()
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        create(user).then((data) => {
            console.log(data)
            if (data.error) {
                this.setState({error: data.error, navigat:false})
            } else {
                this.setState({error: '',navigat:true});
            }
        })        
    
    }
    render(){
        return (
            <div className='container  border m-5 p-5'>
                <form onSubmit={this.handleSubmit}>
                    <p className='h4'>Please Register</p>
                    <label className='form-label'>Name</label>
                    <input className='form-control' onChange={this.handleChange} name='name' value={this.state.name} required />
                    <label className='form-label'>Email</label>
                    <input className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='email' type="email" value={this.state.email} required />
                    <label className='form-label'>Password</label>
                    <input className='form-control' onChange={this.handleChange} name='password' type="password" value={this.state.password} required/>
                    <br/>
                    <div  className='invalid-feedback' >
                            <p>{this.state.error}</p>
                    </div>
                    
                    <button className="w-25 btn btn-lg btn-primary my-2 text-center" type="submit">Sign up</button>
                </form>

                {this.state.navigat && (<Navigate to="/signin" />)}  
            </div>
        )
    }
}

export default SignUp 

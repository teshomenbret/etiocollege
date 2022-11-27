import React from 'react'
// import './Sign-in.style.css'
import {signin} from '../../api/auth/api-auth'
import auth from '../../api/auth/auth-helper';
import {Navigate} from 'react-router-dom'

class SignIn extends React.Component{
    constructor(props){
        super();
        this.state={
            email : "",
            password:"",
            error: '',
            navigate: false,
            from:props.from ||"/" 
        } 
    }
    handleChange = event => { 
        const {value, name} = event.target
        this.setState({[name]:value})
    }
    
    handleSubmit= event => { 
        event.preventDefault()
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }
        signin(user).then((data) => {
            if (data.error) {
                this.setState({error: data.error,navigate: false})
            } 
            else {
            auth.authenticate(data, () => {
                this.setState({error: '',navigate : true})
                })
            }
        })
    }
    
        

    render(){
        return (
            <div className='container border m-5 p-5'>
                <form onSubmit={this.handleSubmit}>
                    <p className="h4">Please Sign In</p>

                    <label className='form-label'>Email:</label>
                    <input className='form-control' onChange={this.handleChange} name='email' type="email" value={this.state.email} required />
                    
                    <label className='form-label'>password:</label>
                    <input className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='password' type="password" value={this.state.password} required/>     
                    <br/>
                    <div  className='invalid-feedback' >
                            <p>{this.state.error}</p>
                    </div>
                    <button className="w-25 btn btn-lg btn-primary my-2 text-center" type="submit">Sign in</button>

                </form>

                {this.state.navigate && (<Navigate to ={this.state.from}/>)}
            </div>
        )
    }
}

export default SignIn 
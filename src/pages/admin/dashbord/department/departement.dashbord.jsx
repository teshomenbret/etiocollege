import React from 'react'
import { Navigate } from 'react-router-dom';
import {create} from '../../../../api/department/api-department'
import auth from './../../../../api/auth/auth-helper'


class DepartmentDashbord extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            error: '',
            navigate:false
        } 
    }
    handleChange = event => { 
        const {value, name} = event.target
        this.setState({[name]:value, error: ''})
    }
    
    handleSubmit= event => { 
        event.preventDefault()
        const departement = {
            name: this.state.name || undefined,
            t:auth.isAuthenticated().token
        }
        create(departement).then((data) => {
            if (data.error) {
                this.setState({error: data.error, navigate:false})
            } 
            else {
                this.setState({error: '', navigate:true})
            }
        })
    }
        

    render(){
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <p className="h4">Create New Departement</p>

                    <label className='form-label'>Name:</label>
                    <input className = {this.state.error? "form-control is-invalid" : 'form-control' } onChange={this.handleChange} name='name' type="text" value={this.state.name} required />
                    
                    <br/>
                    <div  className='invalid-feedback' >
                            <p>{this.state.error}</p>
                    </div>
                    <button className="w-25 btn btn-lg btn-primary my-2 text-center" type="submit">Create</button>

                </form>
                {
                    this.state.navigate && (<Navigate to ='/admin/dashbord/book'/>
                    )  
                }
            </div>
        )
    }
}

export default DepartmentDashbord
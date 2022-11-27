import React from 'react'
import {create } from '../../../../api/book/api-book';
import {list} from '../../../../api/department/api-department'
import auth from './../../../../api/auth/auth-helper'
import { Link} from 'react-router-dom'

class BookDshbord extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            auther:"",
            subject:"",
            description:"",
            uri:"",
            year:1,
            edition:2,
            rateing:2,
            departments:[],
            allDepartements:[],
            error:''
        } 
    }

     handleChange = event => { 
        const {value, name} = event.target
        this.setState({[name]:value})
        
    }
    handleDepChange = event =>{
        const {value} = event.target
        const dep = {
            _id:value
        }
        console.log( "before ",this.state.departments)
        this.state.departments.push(dep)
        console.log("after ", this.state.departments)  
    }

    handleSubmit= event => { 
        event.preventDefault()
        const book = {
            name: this.state.name || undefined,
            auther: this.state.auther || undefined,
            subject:this.state.subject ||undefined,
            description:this.state.description ||undefined,
            uri:this.state.uri ||undefined,
            year:this.state.year ||undefined,
            edition:this.state.edition ||undefined,
            rateing:this.state.rateing ||undefined,
            departments:this.state.departments ||undefined,
        }
        create(book, {t:auth.isAuthenticated().token}).then((data) => {
            if (data.error) {
                console.log(data)
            } 
            else {
                console.log(data)
            }
        })
    }
    componentDidMount(){
        list().then(data =>{
            if (data.error) {
                this.setState({error: data.error})
            } 
            else {
                this.setState({allDepartements:data})
            }
        })
    }
  
    render(){
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row mt-3'>
                        <div className='col-8'>
                                <p className='h4'>Create a book</p>
                                
                                <label className='form-label'>Name</label>
                                <input className='form-control' onChange={this.handleChange} name='name' value={this.state.name} required />
                                
                                <label className='form-label'>auther</label>
                                <input className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='auther' value={this.state.auther} required />
                                
                                <label className='form-label'>subject</label>
                                <input className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='subject' value={this.state.subject} required />

                                <label className='form-label'>description</label>
                                <textarea className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='description' value={this.state.description} required />

                                <label className='form-label'>uri</label>
                                <input className = {this.state.error? "form-control is-invalid" : 'form-control' } type="url" onChange={this.handleChange} name='uri' value={this.state.uri} required />

                                <label className='form-label'>year</label>
                                <input type="number" className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='year' value={this.state.year} required />
                                
                                <label className='form-label'>edition</label>
                                <input type="number" className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='edition' value={this.state.edition} required />

                                <label className='form-label'>rateing</label>
                                <input type="number" className = {this.state.error? "form-control is-invalid" : 'form-control' }  onChange={this.handleChange} name='rateing' value={this.state.rateing} required />
                            
                                <br/>
                                <div  className='invalid-feedback' >
                                        <p>{this.state.error}</p>
                                </div>
                                
                                <button className="w-25 btn btn-lg btn-primary my-2 text-center" type="submit">Sign up</button>
                                <button className="w-25 btn btn-lg btn-primary my-2 mx-3 text-center" type="reset">reset</button>

                        </div>

                        <div className='col-4'>
                            <div className='row m-5'>
                            <Link className='list-unstyled m-3 btn btn-primary btn-lg m-2 text-start' to='/admin/dashbord/department'>Add Departement</Link>

                                <p className='h4'>Select departement for the book</p>

                                
                                    {
                                        this.state.allDepartements.map(department =>( 
                                                <div className='col-12'  key={department._id} >
                                                    <label className='list-unstyled  w-100 btn btn-lg btn-secondary my-2 text-start'><input className=' me-3 form-check-input' type="checkbox" name="departments" onClick={this.handleDepChange} value = {department._id}/>{department.name}</label >
                                                </div>   
                                            )
                                        )
                                    }
                                
                             </div>
                        </div>

                    </div>   
                </form>
            </div>
        )
    }
}

export default BookDshbord

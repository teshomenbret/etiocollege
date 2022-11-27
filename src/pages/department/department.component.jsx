import React from 'react'
import {list} from '../../api/department/api-department'
// import './sign-up.style.css'

class Departments extends React.Component{
    constructor(){
        super();
        this.state={
           departments:[],
           error:''
        } 
    }
    componentDidMount(){
        list().then(data =>{
            if (data.error) {
                this.setState({error: data.error})
            } 
            else {
                this.setState({departments:data})
            }
        })
    }
  
    render(){
        console.log(this.state.departments)
        return (
            <div>
                {
                    this.state.departments.map(department =>{
                        return( 
                            <div>
                                <h5 key={department._id}>{department.name}</h5>
                            
                            </div>  
                        );
                    })
                }
            </div>
        )
    }
}

export default Departments 

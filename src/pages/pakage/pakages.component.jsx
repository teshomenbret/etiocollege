import React from 'react'
import {list} from '../../api/pakage/api-pakages'
// import './sign-up.style.css'

class Pakages extends React.Component{
    constructor(){
        super();
        this.state={
            pakages:[],
           error:''
        } 
    }
    componentDidMount(){
        list().then(data =>{
            if (data.error) {
                this.setState({error: data.error})
            } 
            else {
                this.setState({pakages:data})
            }
        })
    }
  
    render(){
        console.log(this.state.pakages)
        return (
            <div>
                {
                    this.state.pakages.map(pakage =>{
                        return( 
                            <div>
                                <h1 key={pakage._id}>{pakage.name}</h1>
                                <p key={pakage.department._id}>{pakage.department.name}</p>
                            </div>  
                        );
                    })
                }
            </div>
        )
    }
}

export default Pakages

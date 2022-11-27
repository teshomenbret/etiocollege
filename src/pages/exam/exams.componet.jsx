import React from 'react'
import {list} from '../../api/exam/api-exam'
import BookCard from '../../component/Card/BookCard/bookCard.componrt'

// import './sign-up.style.css'

class Exams extends React.Component{
    constructor(){
        super();
        this.state={
           exams:[],
           error:''
        } 
    }
    componentDidMount(){
        list().then(data =>{
            if (data.error) {
                this.setState({error: data.error})
            } 
            else {
                this.setState({exams:data})
            }
        })
    }
  

    render(){
        console.log(this.state.exams)
        return (
            <div className='m-3'>
                <div className='row gx-4 gy-3'>
                    {
                        this.state.exams.map(exam =>{
                            return( 
                                <div className=' col-md-6 col-sm-2 col-sm-6 col-lg-4 col-xl-2'>
                                    <BookCard key = {exam._id} book = {exam}/>
                                </div>  
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Exams

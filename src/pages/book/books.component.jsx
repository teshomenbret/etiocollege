import React from 'react'
import {list} from '../../api/book/api-book'
import BookCard from '../../component/Card/BookCard/bookCard.componrt'
// import './sign-up.style.css'

class Books extends React.Component{
    constructor(){
        super();
        this.state={
           books:[],
           error:''
        } 
    }
    componentDidMount(){
        list().then(data =>{
            if (data.error) {
                this.setState({error: data.error})
            } 
            else {
                this.setState({books:data})
            }
        })
    }
  
    render(){
        return (
            <div className='m-3'>
                <div className='row gx-4 gy-3'>
                    {
                        this.state.books.map(book =>( 
                                <div key = {book._id}  className=' col-md-6 col-sm-2 col-sm-6 col-lg-4 col-xl-2'>
                                    <BookCard book = {book}/>
                                </div>  
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Books 
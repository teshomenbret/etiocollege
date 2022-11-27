import React, {useEffect, useState} from "react"
import { useParams, Navigate} from "react-router-dom"
import {read} from '../../../api/book/api-book'
import auth from "../../../api/auth/auth-helper"
import BookCard from '../../../component/Card/BookCard/bookCard.componrt'
import plasholder from '../../../assets/41-F-93JkkL.jpg'

export default function BookDetail(){
    const [book, setBook] = useState({})
    const [redirectToSignin, setRedirectToSignin] = useState(false)
    const params = useParams()

    useEffect(() => {
            const jwt = auth.isAuthenticated()
            read(params, {t:jwt.token})
            .then(data =>{
                if (data && data.error) {
                    setRedirectToSignin(true)
                    } 
                else {
                    setBook(data)  
                }
            })
      },[params.bookId]);

    return (
        <div>
            <div className="row">
                <div className="col-sm-2">
                   {/* <p>plase holder</p> */}
                   <BookCard book = {book}></BookCard>
                   <BookCard book = {book}></BookCard>
                </div>

                <div className="bg-light col-sm-8">
                    <div className="row mt-5" >   
                        <div className="col-sm-6">
                            <img className="img-fluid" src={plasholder}/>
                        </div>
                        <div className="col-sm-6">
                            <div className="h3">
                                <h1 className="h1">{book.name}</h1> 
                                <p>{"Rateing: "+book.rateing}</p>
                                <p>{"Edition: "+book.edition}</p>
                                <p>{"Subject: "+book.subject}</p>
                                <p>{"Year: "+book.year}</p>
                                <p>Departements:</p>

                                <div className="ms-5">
                                        {book.departments&&book.departments.map(department =>(
                                            <p >{department.name}</p>   
                                                )
                                            )
                                        }
                                </div> 

                            </div>
                        </div>
                    </div>

                    <div className="row m-5">
                        <div>
                           {book.description&&book.description.split("\n").map(description =>(
                            <p className="fs-4" >{description}</p>
                           ))}
                           
                        </div>
                    </div>

                </div>

                <div className="col-sm-2">
                    {/* <p>plase holder</p> */}
                    <BookCard book = {book}></BookCard>
                    <BookCard book = {book}></BookCard>
                </div>
            </div>
            {redirectToSignin&&<Navigate to = '/signin' />}  
        </div>  
    )
}


import React from 'react'
import Home from './pages/home/home.component'
import Menu from './component/Menu/menu.component'
import SignUp from './pages/Sign-up/sign-up.component'
import SignIn  from './pages/Sign-in/Sign-in.component'
import Books from './pages/book/books.component'
import Pakags from './pages/pakage/pakages.component'
import Dashbord from './pages/admin/dashbord/Dashbord.pages'
import BookDetail from './pages/book/BookDetail/BookDetail.component'
import DepartmentDashbord from './pages/admin/dashbord/department/departement.dashbord'
import BookDshbord from './pages/admin/dashbord/book/book.dashbord'
import Departments from './pages/department/department.component'
import { BrowserRouter,Route ,Routes, Navigate} from 'react-router-dom'
import Exams from './pages/exam/exams.componet'
import PrivateRoute from './api/auth/PrivateRoute'

const MainRouter = () => {
 return ( 
    <div >
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route exact path='/' element = {<Home/>}/> 
                <Route exact path='/signup' element = {<SignUp />}/>
                <Route exact path='/signin' element = {<SignIn/>}/> 
                <Route exact path='/books' element = {<Books/>}/>
                <Route exact path='/books/:bookId' element = {<PrivateRoute element = {<BookDetail/>}/>} />
                <Route exact path='/exams' element = {<Exams/>}/>
                <Route exact path='/pakags' element = {<Pakags/>}/> 
                <Route exact path='/departments' element =  {<Departments/>}/>
                <Route exact path='/admin' element = {<PrivateRoute element={<Navigate to = '/admin/dashbord' />}/>}/>
                <Route exact path='/admin/dashbord' element = {<PrivateRoute element={<Dashbord/>}/>}/>
                <Route exact path='/admin/dashbord/book' element = {<PrivateRoute element={<BookDshbord/>}/>} />
                <Route exact path='/admin/dashbord/department' element = {<PrivateRoute element={<DepartmentDashbord/>}/> } />
            </Routes>
        </BrowserRouter>
        
    </div>
 )
}
export default MainRouter

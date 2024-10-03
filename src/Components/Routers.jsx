import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Form, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'

function Routers() {
    return (
        <div>
             <Toaster />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/chat/:userId' element={<Chat/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/product' element={<ProductDetails/>}/>
                <Route path='/*' element={<NotFound/>}/>
                
            </Routes>
        </div>
    )
}

export default Routers

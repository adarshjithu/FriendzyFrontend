import React from 'react'
import Login from './Pages/User/Login/Login'
import './App.css'
import Signup from './Pages/User/Signup/Signup'
import VerifyEmail from './Pages/User/VerifyEmail/VerifyEmail'
import ResetPassword from './Pages/User/ResetPassword/ResetPassword'
import {BrowserRouter ,Router,Route,Routes} from 'react-router-dom'
import ForgetPassword from './Pages/User/ForgetPassword/ForgetPassword'
import SubmitOtp from './Pages/User/SubmitOtp/SubmitOtp'
import Home from './Pages/User/Home/Home'


function App() {

  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/Verify-email' Component={VerifyEmail}/>
        <Route path='/reset-password' Component={ResetPassword}/>
        <Route path='/forget-password' Component={ForgetPassword}/>
        <Route path='/submit-otp' Component={SubmitOtp}/>
        <Route path='/home' Component={Home}/>


      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App

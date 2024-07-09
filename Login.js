import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [loginData,setLoginData]=useState({
        username: '',
        password: ''
    });     
    const handleLoginSubmit= async (e) =>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:8000/login',loginData);
            const {success,message}=response.data;
            if(success) console.log('login success');
            else console.log(message);
        }
        catch(error){
            console.error('login error',error);
        }
        setLoginData({
            username: '',
            password: ''
        })
    }
    const HandleChangeLogin= (e) =>{
        const {name,value}=e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]:value

        }))
    }
    
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginSubmit}>
            <input type='text' name='username' placeholder='username' required
            value={loginData.username}
            onChange={HandleChangeLogin}/>
            <input type='password' name='password' placeholder='password' required
            value={loginData.password}
            onChange={HandleChangeLogin}/>
            <button type='submit'>login</button>
            <p>not yet Registered?  <br/>
                <Link to ='/registration   '>register here</Link>
            </p>
        </form>
    </div>
  )
}

export default Login
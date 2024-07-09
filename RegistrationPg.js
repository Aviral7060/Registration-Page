import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const RegistrationPg = () => {
    const [registrationData,setRegistrationData]=useState({
        username:'',
        password:''
    })
    const handleRegistrationSubmit=
        async (e)=>{
            e.preventDefault();
            try{
                const response=await axios.post('http://localhost:8000/register',registrationData);
                console.log(response.data);
            }
            catch(error){
                console.log("error");
            }
            setRegistrationData({
                username:'',
                password:''
            })
         
    }
    const handleRegistration=(e)=>{
         const {name,value}=e.target;
         setRegistrationData((prevData)=>({
            ...prevData,
            [name]:value,

         }))
    }
  return (
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleRegistrationSubmit}>
            <input type='text' name='username' placeholder='username' value={registrationData.username} required onChange={handleRegistration}/> 
            <input type='password' name='password' placeholder='password' value={registrationData.password} required onChange={handleRegistration}/> 
            <button>Register</button>
            <p>Already registered?
                <Link to="/login">Login here</Link>
            </p>
        </form>
    </div>
  )
}

export default RegistrationPg
import React,{useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';


function Login() {
    let navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[pwd,setPwd]=useState('')

    const handleChange = (e) =>{
        let items={
            email: email,
            password: pwd
        }
         axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',items)
         .then(response=>{
             navigate("/Welcome")
         })
         .catch(error=>{
             window.alert(error)
         })
        console.log(items);
       e.preventDefault();
        
    }
    

     return(
        <div className='login_form'>
           <h1>
               Login
           </h1> 
           <form onSubmit={handleChange}>
                <label>Email: 
                    <input onChange={e=>setEmail(e.target.value)} type="text" value={email} placeholder='email@gmail.com' autoComplete="off"/>
                </label>
                 <br></br>
                <label>Password: 
                    <input onChange={e=>setPwd(e.target.value)} type="password" value={pwd} placeholder='Enter password'/>
                </label> 
                <p></p>
                <input type="submit" value="Login" />
  
                   <h3  className='toggle-login-regis' onClick={()=>{navigate("/Register")}}>Register</h3> 
                
            </form>
            
        </div>
    );
}

export default Login;
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigate = useNavigate();
    const[email,setEmail] = useState('');
    const[pwd,setPwd] = useState('');
    const[name,setName] = useState('');
    const[number,setNumber] = useState('');

    const handleChange = (e) =>{
        let items={
        email: email,
        password: pwd,
        name: name,
        mobile: number
        };
        axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister',items)
        .then(response =>{
            window.alert("Registration Successful")
            navigate("/");
        })
        .catch(error=>{
            window.alert(error)
        })
        e.preventDefault();
        
    }

    return(
        <div className='registration'>
           <h1>
               Register
           </h1> 
           <form onSubmit={handleChange}> 
                <label>Email: 
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" value={email} placeholder='email@gmail.com' autoComplete="off"/>
                </label>
                 <br></br>
                <label>Password: 
                    <input onChange={(e)=>setPwd(e.target.value)} type="password" value={pwd} placeholder='Enter password'/>
                </label>
                <label>Name: 
                    <input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Enter your name'/>
                </label>
                <label>Phone number: 
                    <input onChange={(e)=>setNumber(e.target.value) } type="tel" value={number} placeholder='+91 '/>
                </label>
                <p></p>
                <input type="submit" value="Register" />
            
                   <h3 className='toggle-login-regis' onClick={()=>{navigate("/")}}>Login</h3> 
                
            </form>
            
        </div>
    );
}

export default Register;
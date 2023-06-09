import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn}= useContext(AuthContext)
    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result=>{
            const loggedUser =result.user
            console.log(loggedUser)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin} className='form-control'>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>

            </form>
            
        </div>
    );
};

export default Login;
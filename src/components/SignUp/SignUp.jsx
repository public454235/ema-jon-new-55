import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(confirm, email, password)
        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSignUp} className='form-control'>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirm' id='confirm' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign up" />
                <p><small>New to Ema-john? <Link to='/login'>Create New Account</Link></small></p>
                <p className='text-error'>{error}</p>

            </form>


        </div>
    );
};

export default SignUp;
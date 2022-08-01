import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import setCookie from '../cookies';
const axios = require('axios').default;



export default function Register(props) {
    const [message, setMessage] = useState({ color: null, text: "" });

    return (
        <Form action="http://localhost:8000/register" method='POST'>
            <h1 className="text-3xl">Register</h1>

            <p className='text-center mt-2 h-3' style={{ color: message.color }}>{ message.text }</p>

            <div className="my-5">
                <div className="mb-4">
                    <label htmlFor="username">Username</label><br/>
                    <input type="text" name="username" id="username"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" name="password" id="password"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="confPassword">Confirm Password</label><br/>
                    <input type="password" name="confPassword" id="confPassword"/>
                </div>
            </div>
            
            <button onClick={ (e) => {
                e.preventDefault();

                const password = document.querySelector("#password").value;
                const confPassword = document.querySelector("#confPassword").value;
                const username = document.querySelector("#username").value;

                axios.post("http://localhost:8000/register", 
                    {username: username, password: password, confPassword: confPassword}
                ).then(res => {
                    if (res.data.jwt) {
                        setMessage({ color: "green", text: "Creating your account :)" });
                        setCookie("jwt", res.data.jwt, 7);
                    } else {
                        setMessage({ color: "red", text: res.data });
                    }
                })

            } } className="border border-gray-500 px-2 py-1 rounded">Register</button>

            <p className='mt-5'>Already have an account? <Link to='/login' className='text-blue-600'>Log in.</Link></p>
        </Form>
    );
}
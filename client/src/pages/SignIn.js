import React, { useState } from 'react'
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import { signin } from '../utils/ApiUtils';

function SignIn() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(userData);
        signin(userData)
            .then((res) => {
                // console.log(res);
                if (res.status === 202) {
                    alert(`${res.data.msg}`);
                }
                else {
                    navigate("/");
                    alert("login successfull");
                }
            })
            .catch((error) => { console.error(); })
    }
    const handleChange = (e) => {
        // console.log(e.target.id);
        setUserData({ ...userData, [e.target.id]: e.target.value });
    }
    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src='./blacklogoamazon.png' alt='amazonlogo' />
                    </div>
                    <div className='sign_form'>
                        <form onSubmit={handlesubmit}>
                            <h1>Sign-In</h1>
                            <div className='form_data'>
                                <label htmlFor='Email'>Email</label>
                                <input type='text' name="email" id="email" placeholder='abc@domain.com' onChange={(e) => { handleChange(e) }} value={userData.email} />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' name="password" id="password" placeholder='At least 6 character' onChange={(e) => { handleChange(e) }} value={userData.password} />
                            </div>
                            <button className='signin_btn'>Submit</button>
                        </form>
                    </div>
                    <div className='create_accountinfo'>
                        <p>New To Amazon</p>
                        <button onClick={() => {
                            navigate("/signup");
                        }}>Create your Amazon Account</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn
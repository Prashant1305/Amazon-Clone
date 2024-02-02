import React from 'react'
import "./Sign.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src='./blacklogoamazon.png' alt='amazonlogo' />
                    </div>
                    <div className='sign_form'>
                        <form>
                            <h1>Sign-In</h1>
                            <div className='form_data'>
                                <label htmlFor='Email'>Email</label>
                                <input type='text' name="email" id="email" placeholder='abc@domain.com' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' name="password" id="password" placeholder='At least 6 character' />
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
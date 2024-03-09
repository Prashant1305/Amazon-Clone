import React, { useState } from 'react'
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import { signin } from '../utils/ApiUtils';
import { MyLoginValues } from '../Context/AuthContext';
import { toast } from 'react-toastify';

function SignIn() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const { setIsLogin } = MyLoginValues();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(userData);
        signin(userData)
            .then((res) => {
                // console.log(res);
                if (res.status === 202) {
                    toast.warning(`${res.data.msg}`);
                    setUserData({ ...userData, "password": "" });
                }
                else {
                    navigate("/");
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    setIsLogin(true);
                    toast.success("login successfull");
                }
            })
            .catch((error) => { console.log(error); })
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
                        <img src='./blacklogodigitalstore.png' alt='digitalStorelogo' />
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
                        <p>New To Digital Store</p>
                        <button onClick={() => {
                            navigate("/signup");
                        }}>Create your Digital Store Account</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn
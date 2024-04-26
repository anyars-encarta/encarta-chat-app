import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [image, setImage] = useState({
        file: null,
        url: ''
    });

    const handleImage = (e) => {
        if (e.target.files[0]) {
            setImage({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    };

    return (
        <div className='login-container'>
            <div className="item">
                <h2>Welcome back,</h2>
                <form>
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>

            <div className="separator"></div>

            <div className="item">
                <h2>Create an Account</h2>
                <form>
                    <label htmlFor="file">
                        <img src={image.url || './avatar.png'} alt="" />
                        Upload an Image</label>
                    <input type="file" id='file' style={{ display: 'none' }} onChange={handleImage} />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login
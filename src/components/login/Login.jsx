import React, { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

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

    const handleRegister = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked: []
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });

            toast.success('Account created! You can login now!');
        } catch (e) {
            console.log(e)
            toast.error(e.message)
        }
    };

    const handleLogin = (e) => {

    };

    return (
        <div className='login-container'>
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>

            <div className="separator"></div>

            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
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
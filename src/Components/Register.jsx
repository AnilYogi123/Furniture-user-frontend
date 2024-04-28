import React, { useState } from 'react'
import loginImage from '../assets/loginImage.png';
import Input from './Input';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AxiosLogin = () => {
    const { handleSubmit, register, reset } = useForm()
    const [userData, setUserData] = useState()

    const onSubmit = (data) => {
        axios.post('http://159.223.33.101:9005/auth/v3/login/', data).then((response) => {
            setUserData(response.data.data.user)
            localStorage.setItem('data', JSON.stringify(userData))
        }).catch(function (error) {
            console.error(error);
        });
        reset()
    }
    return (
        <div className='grid grid-cols-2 w-full h-screen'>
            <div className='bg-[#2C73EB] p-10'>
                <img
                    src={loginImage}
                    alt="login image"
                    className='mx-auto mt-20 w-80 h-80'
                />
            </div>
            <div className='bg-[#E5E5E5]'>
                <div className='mx-32 my-20'>
                    <h2 className='text-xl font-semibold py-4'>User Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label='Email'
                            type='text'
                            register={register}
                            registerName='identity'
                            required
                        />
                        <Input
                            label='Password'
                            type='password'
                            register={register}
                            registerName='password'
                            required
                        />

                        <button type="submit" className='text-white bg-[#2C73EB] w-72 my-5 py-2 rounded'>Submit</button>
                        <p className='text-sm text-[#696F79]'>Don't have Account? <Link to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AxiosLogin

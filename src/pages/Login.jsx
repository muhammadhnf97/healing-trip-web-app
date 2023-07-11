import React, { useState } from 'react'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { setLoginSlice } from '../features/login/loginSlice'
import { useDispatch } from 'react-redux'
import Loading from '../components/Loading'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
 
    const handleSubmitLogin = async() => {
        setIsLoading(true)
        try {
            const reponse = await fetch('http://127.0.0.1:8000/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                })
            })
            const data = await reponse.json()

            sessionStorage.setItem('login', JSON.stringify({
                status: data.status,
                user: {
                    name: data.data.user.name,
                    email: data.data.user.email,
                    avatar: data.data.user.avatar,
                    token: data.data.token
                },
                isLogin: true
            }))
            
            dispatch(setLoginSlice({
                status: data.status,
                name: data.data.user.name,
                email: data.data.user.email,
                avatar: data.data.user.avatar,
                token: data.data.token
            }))

            
            navigate('/')

        } catch (error) {
            console.log('Error Login : ',error)
        }

    }

    const handleChangeLogin = (e) => {
        const { name, value } = e.target
            setUser(userData=>{
                return {
                    ...userData,
                    [name]: value
                }
            })
            return
        }

    const handleClickShowPassword = () => {
        setIsShowPassword(prev=>!prev)
    }
  return (
    <>
    {
        isLoading && 
        <Loading />
    }
    <img src='/images/bg-login.jpg' className='w-screen h-screen object-cover fixed object-bottom bottom-0 -z-10' />
    <div className='w-screen h-screen flex flex-col items-center justify-center font-poppins space-y-5'>
        <div className='text-center space-y-3 drop-shadow-xl'>
            <h2 className='text-4xl font-bold'>Welcome.</h2>
            <p className='italic text-gray-600'>Ready to wherever you wanna go ? </p>
        </div>
            <div className='w-96 shadow-md space-y-5 p-5 rounded-lg bg-white bg-opacity-80 bg-blend-darken'>
                <div className='flex items-center justify-start gap-5'>
                    <p className='w-32'>Email</p>
                    <input type='text' name='email' value={user.email === null ? '' : user.email} className='border outline-none focus:border-[#F5032E] w-full px-2' onChange={(e)=>handleChangeLogin(e)} /> 
                </div>
                <div className='flex items-center justify-start gap-5'>
                    <p className='w-32'>Password</p>
                    <div className='flex items-center gap-2 w-full'>
                        <input type={isShowPassword ? 'text' : 'password'} name='password' value={user.password === null ? '' : user.password} className='border outline-none focus:border-[#F5032E] w-full px-2' onChange={(e)=>handleChangeLogin(e)} />
                        <button className='text-gray-500' onClick={handleClickShowPassword}>
                            { !isShowPassword ? <AiOutlineEyeInvisible className='w-5 h-5' /> : <AiOutlineEye className='w-5 h-5' />}
                        </button> 
                    </div>
                </div>
                <button className='w-full py-2 bg-[#F5032E] hover:bg-[#d21034] active:bg-[#b00f2c] rounded-lg text-white font-semibold' onClick={handleSubmitLogin}>
                    Login
                </button>
                <p className='text-center text-sm italic text-blue-500'>Register instead ?</p>
            </div>
    </div>
    </>
  )
}

export default Login
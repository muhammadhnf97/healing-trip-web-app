import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TiThMenu } from 'react-icons/ti'
import { setLoginSlice } from '../features/login/loginSlice'
import Sidebar from './Sidebar'

const Header = ({ pinPoint }) => {
  const [isSideBar, setIsSideBar] = useState(false)
  const loginData = useSelector(state=>state.login)

  const dispatch = useDispatch()

  const handleClickLogout = async() => {
    const response = await fetch('http://127.0.0.1:8000/api/auth/logout',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginData.user.token}`
        },
      }
    )
    const data = await response.json()
    
    if(data.status === 'success'){
      sessionStorage.removeItem('login')
      dispatch(setLoginSlice({
        status: null,
        name: null,
        email: null,
        avatar: null,
        token: null,
        })
      )
    }
  }  

  const handleClickIsSideBar = () => {
    setIsSideBar(prev=>!prev)
  }

  return (
  <>    
    <nav className='h-[92px] w-full px-5 md:px-0 fixed bg-white z-10'>
      <div className='h-full max-w-[1200px] mx-auto border-b border-[#CFCFCF] flex items-center justify-between font-poppins'>
        <h1 className='text-[#F5032E] text-[36px] font-bold'>Healing.</h1>
        <div className='hidden md:flex md:items-center md:justify-center md:gap-5 md:text-[18px] md:font-semibold'>
            <Link to='/'><p className={`${pinPoint === 'home' ? 'text-red-500' : 'duration-500 hover:bg-black hover:bg-opacity-20 rounded-full px-2'}`}>Home</p></Link>
            <Link to='/paket'><p className={`${pinPoint === 'paket' ? 'text-red-500' : 'duration-500 hover:bg-black hover:bg-opacity-20 rounded-full px-2'}`}>Paket</p></Link>
            <Link to='/feedbacks'><p className={`${pinPoint === 'feedbacks' ? 'text-red-500' : 'duration-500 hover:bg-black hover:bg-opacity-20 rounded-full px-2'}`}>Feedbacks</p></Link>
            <Link to='/blog'><p className={`${pinPoint === 'blog' ? 'text-red-500' : 'duration-500 hover:bg-black hover:bg-opacity-20 rounded-full px-2'}`}>Blog</p></Link>
            <Link to='/blog'><p className={`${pinPoint === 'contact' ? 'text-red-500' : 'duration-500 hover:bg-black hover:bg-opacity-20 rounded-full px-2'}`}>Contact</p></Link>
        </div>
        <div className='hidden md:flex gap-3 items-center'>
          {
            loginData?.status !== null &&
            <>
            <img src={loginData?.user?.avatar} alt='profile picture' loading='lazy' className='w-16 h-16 object-cover rounded-full' />
            <div>
              <p className='font-bold'>{loginData?.user?.name}</p>
              <p className='text-sm font-gray-500'>{loginData?.user?.email}</p>
            </div>
            </>
          }
          { 
            loginData?.status !== 'success' ?
            <Link to={'/login'} ><button className='hidden md:block py-3 px-8 bg-[#F5032E] text-white font-semibold rounded-3xl'>Login</button></Link>
            :
          <button className='hidden md:block py-3 px-8 bg-[#F5032E] text-white font-semibold rounded-3xl' onClick={handleClickLogout}>Logout</button>
          }
        </div>
        <button className='w-7 h-7 md:hidden' onClick={handleClickIsSideBar}><TiThMenu className='w-7 h-7' /></button>
      </div>
      <Sidebar 
        isSideBar={isSideBar} 
        handleClickIsSideBar={handleClickIsSideBar}
        handleClickLogout={handleClickLogout}
        loginData={loginData}
        pinPoint={pinPoint} />
  </nav>
</>
    
  )
}

export default Header
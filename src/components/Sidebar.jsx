import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Sidebar = ({ isSideBar, handleClickIsSideBar, handleClickLogout, loginData, pinPoint }) => {
  return (
    <>
    <button className={`${isSideBar ? 'visible bg-opacity-50' : 'invisible bg-opacity-0'} left-0 top-0 duration-300 fixed w-full h-screen  bg-black z-10 `} onClick={handleClickIsSideBar}></button>
    <div className={`${isSideBar ? 'visible translate-y-0' : 'invisible -translate-y-0' } ease-out duration-100 bg-white fixed py-5 right-0 top-0 w-full h-fit z-10 px-10 pb-5 font-semibold text-center text-lg shadow-lg font-poppins md:hidden `}>
      <button className='absolute top-5 right-5' onClick={handleClickIsSideBar}><RxCross1 /></button>
        {
          loginData?.status !== null &&
          <div className='border-b border-gray-600 h-60 w-full space-y-5'>
            <img src={loginData?.user?.avatar} alt='pp' loading='lazy' className='w-36 h-36 p-1 rounded-full object-cover border-4 border-[#F5032E] mx-auto' />
            <div className=''>
              <p className='text-2xl font-bold'>{loginData?.user?.name}</p>
              <p className='font-semibold text-gray-700'>{loginData?.user?.email}</p>
            </div>
          </div>
        }
        <Link to='/'>
          <p className={`${pinPoint === 'home' ? 'text-red-500' : 'hover:bg-white hover:bg-opacity-40 hover:rounded-full'} px-2 py-2`}>Home</p>
        </Link>
      <Link to='/paket'>
        <p className={`${pinPoint === 'paket' ? 'text-red-500' : 'hover:bg-white hover:bg-opacity-40 hover:rounded-full'} px-2 py-2`}>Paket</p>
      </Link>
      <Link to='/feedbacks'>
        <p className={`${pinPoint === 'feedbacks' ? 'text-red-500' : 'hover:bg-white hover:bg-opacity-40 hover:rounded-full'} px-2 py-2`}>Feedbacks</p>
      </Link>
      <Link to='/blog'>
        <p className={`${pinPoint === 'blog' ? 'text-red-500' : 'hover:bg-white hover:bg-opacity-40 hover:rounded-full'} px-2 py-2`}>Blog</p>
      </Link>
      <Link to='/contact'>
        <p className={`${pinPoint === 'contact' ? 'text-red-500' : 'hover:bg-white hover:bg-opacity-40 hover:rounded-full'} px-2 py-2`}>Contact</p>
      </Link>
      {
        loginData.status === 'success' ?
        <button className={`my-5 py-3 px-8 bg-[#F5032E] text-white font-semibold rounded-3xl`} onClick={handleClickLogout}>Logout</button>
        :
      <Link to={'/login'} ><button className={`my-5 py-3 px-8 bg-[#F5032E] text-white font-semibold rounded-3xl`}>Login</button></Link>}
    </div>
    </>
  )
}

export default Sidebar
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div className='space-y-10 pt-3 pb-16 bg-white'>
        <Header />
        <div id='detail'>
            <Outlet />
        </div>
    </div>
  )
}

export default Root
import React from 'react'
import { VscLoading } from 'react-icons/vsc'

const Loading = () => {
  return (
    <div className='fixed w-screen h-screen bg-white z-30 flex items-center justify-center top-0'>
        <VscLoading className='text-red-700 w-10 h-10 animate-spin' />
    </div>
  )
}

export default Loading
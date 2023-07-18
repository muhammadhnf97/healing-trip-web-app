import React from 'react'

const Notification = ({ notif, handleClickNotif }) => {
  return (
    <div className='fixed bg-black h-screen w-screen flex items-center justify-center bg-opacity-60'>
        <div className='bg-white shadow-md rounded-lg w-72 h-40 p-5 text-center flex flex-col gap-5 items-center justify-center'>
            <p>{notif} gagal, mohon periksa kembali {notif === 'Login' ? 'ID dan Password' : ''}</p>
            <button className='bg-red-500 px-5 py-1 rounded-lg shadow-md' onClick={handleClickNotif}>OK</button>
        </div>

    </div>
  )
}

export default Notification
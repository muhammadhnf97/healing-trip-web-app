import React, { useState } from 'react'
import Header from '../components/Header'

const Feedbacks = () => {
    const [feedbackInput, setFeedbacks] = useState({ nama : null, email : null, consumenFeedbacks: null })

    const handleChange = (e) => {
        const {name, value} = e.target

        setFeedbacks(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    } 
  return (
    <>
    <Header pinPoint={'feedbacks'} />
    <div className='space-y-7 pt-28 bg-white md:max-w-7xl md:mx-auto'>
        <form onSubmit={(e)=>handleSubmit(e)} >
        <div className='p-10 md:p-16 rounded-lg space-y-5 flex flex-col justify-center items-center md:space-y-0 '>
            <p className='text-2xl font-semibold'>We are glad to recive your feedbacks</p>
            <div className='space-y-2 w-full md:w-fit'>
                <p>Name</p>
                <input type='text' name='nama' value={feedbackInput.nama ? feedbackInput.nama : ''} className='border w-full rounded-md md:w-[40rem]' onChange={(e)=>handleChange(e)} />
            </div>
            <div className='space-y-2 w-full  md:w-fit'>
                <p>Email</p>
                <input type='text' name='email' value={feedbackInput.email ? feedbackInput.email : ''} className='border w-full rounded-md md:w-[40rem]' onChange={(e)=>handleChange(e)} />
            </div>
            <div className='space-y-2 w-full md:w-fit'>
                <p>Write your opinions here ...</p>
                <textarea  name='email' value={feedbackInput.email ? feedbackInput.consumenFeedbacks : ''} className='border w-full md:w-[40rem]' onChange={(e)=>handleChange(e)} />
            </div>
            <button className='px-3 py-2 bg-red-500 rounded-lg shadow-md hover:bg-red-600 active:bg-red-700 active:shadow-inner w-full md:w-[40rem] '>Send</button>
        </div>

        </form>
    </div>
    <Footer />
    </>
  )
}

export default Feedbacks
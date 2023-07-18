import { useEffect, useState } from 'react'
import '../App.css'
import ExploreNow from '../components/ExploreNow'
import Header from '../components/Header'
import Main from '../components/Main'
import { getDataDestination } from '../lib/getdata'
import { AiOutlineArrowRight } from 'react-icons/ai'
import SecondCard from '../components/SecondCard'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

function App() {
  const [country, setCountry] = useState([])
  const [batasAwal, setBatasAwal] = useState(0)
  const [batasAkhir, setBatasAkhir] = useState(3)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    getDataDestination().then(data=>setCountry(data))
  }, [])

  useEffect(()=>{
    if(country.length > 0) { 
      setIsLoading(false)
    }
  }, [country])

  const handleClickNext = () => {
    setBatasAkhir(prev=>prev >= country.length ? prev : prev+1 )
    setBatasAwal(prev=>prev >= country.length - 3 ? prev : prev+1 )
  }

  const handleClickBefore = () => {
    setBatasAwal(prev=>prev <= 0 ? prev : prev-1 )
    setBatasAkhir(prev=>prev <= 3 ? prev : prev-1 )
  }
  
  return (
    <>
    {
      isLoading &&
      <Loading />
    }
    <div className=' pb-76'>
    <Header pinPoint={'home'} />
    <div className='space-y-7 pt-28 bg-white md:px-10 pb-20'>
      <Main />
      <div className='px-10'>
        <ExploreNow />
      </div>
      <div className='px-2 md:px-10 bg-[#F5032E] md:rounded-lg py-5 h-fit max-w-7xl w-96 md:w-full mx-auto'>
        <h2 className='font-bold text-3xl'>Favorite Country</h2>
        <div className='flex flex-col md:grid md:grid-cols-3 justify-center md:w-full py-5 relative gap-2'>
          <div className='absolute -right-10 z-10 top-1/2 group'>
            <button className='w-16 h-16 rounded-full shadow-md bg-white flex items-center justify-center duration-150 group-hover:-translate-x-5 md:group-hover:translate-x-5' onClick={handleClickNext}><AiOutlineArrowRight className='w-7 h-7' /></button>
          </div>
          <div className='absolute -left-10 top-1/2 z-20 group'>
            <button className='w-16 h-16 rounded-full shadow-md bg-white flex items-center justify-center duration-150 group-hover:translate-x-5 md:group-hover:-translate-x-5' onClick={handleClickBefore}><AiOutlineArrowRight className='w-7 h-7 rotate-180' /></button>
          </div>
          <SecondCard country={country} batasAwal={batasAwal} batasAkhir={batasAkhir} />
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default App

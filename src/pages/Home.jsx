import { useEffect, useState } from 'react'
import '../App.css'
import ExploreNow from '../components/ExploreNow'
import Header from '../components/Header'
import Main from '../components/Main'
import { getDataDestination } from '../lib/getdata'
import { AiOutlineArrowRight } from 'react-icons/ai'

function App() {
  const [country, setCountry] = useState([])
  const [batasAwal, setBatasAwal] = useState(0)
  const [batasAkhir, setBatasAkhir] = useState(3)
  
  useEffect(()=>{
    getDataDestination().then(data=>setCountry(data))
  }, [])

  const handleClickNext = () => {
    setBatasAkhir(prev=>prev >= country.length ? prev : prev+1 )
    setBatasAwal(prev=>prev >= country.length - 3 ? prev : prev+1 )
  }
  
  console.log(batasAwal, batasAkhir, country.length)

  const handleClickBefore = () => {
    setBatasAwal(prev=>prev <= 0 ? prev : prev-1 )
    setBatasAkhir(prev=>prev <= 3 ? prev : prev-1 )
  }
  
  return (
    <>
    <Header pinPoint={'home'} />
    <div className='space-y-7 py-28 bg-white px-10'>
      <Main />
      <div className='px-10'>
        <ExploreNow />
      </div>
      <div className='px-10 bg-[#F5032E] rounded-lg py-5 h-fit max-w-7xl mx-auto'>
        <h2 className='font-bold text-3xl'>Favorite Country</h2>
        <div className='grid grid-cols-3 justify-center w-full py-5 relative'>
          <div className='absolute -right-10 top-1/2 group'>
            <button className='w-16 h-16 rounded-full shadow-md bg-white flex items-center justify-center duration-150 group-hover:translate-x-5' onClick={handleClickNext}><AiOutlineArrowRight className='w-7 h-7' /></button>
          </div>
          <div className='absolute -left-10 top-1/2 z-10 group'>
            <button className='w-16 h-16 rounded-full shadow-md bg-white flex items-center justify-center duration-150 group-hover:-translate-x-5' onClick={handleClickBefore}><AiOutlineArrowRight className='w-7 h-7 rotate-180' /></button>
          </div>
          {
            country.map(ctr=>(
              <div key={ctr.id} className='w-96 relative flex-1 h-52 hover:h-fit group border'>
                <img src={ctr.image} alt='pp' loading='lazy' className='w-full h-52 object-cover object-center' />
                  <p className='absolute top-40 text-2xl font-bold text-white left-7 drop-shadow-lg'>{ctr.name}</p>
                <div className='bg-black text-white bg-opacity-70 scale-0 duration-200 origin-top p-5 group-hover:scale-100  absolute text-xs text-start'>
                  <p>{ctr.description}</p>
                </div>
              </div>
            )).slice(batasAwal, batasAkhir)
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App

import './App.css'
import ExploreNow from './components/ExploreNow'
import Header from './components/Header'
import Main from './components/Main'

function App() {  
  return (
    <div className='space-y-10 p-3 bg-white'>
      <Header pinPoint={'home'} />
      <Main />
      <div className='px-5 md:px-0'>
        <ExploreNow />
      </div>
    </div>
  )
}

export default App

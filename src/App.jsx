import { Routes, Route } from 'react-router-dom'

import './css/App.css'

import Favourites from './Pages/Favourites'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Favourite' element={< Favourites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App

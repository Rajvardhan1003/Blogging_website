import './App.css'
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Register'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/home'
import Footer from './Components/Footer/footer'
import Category from './Pages/categoryBlogs/category'
import DedicatedBlog from './Pages/DedicatedBlogs/DedicatedBlog'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* Auth Pages */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />

        {/* Category Page */}
        <Route path='/blogs/:category' element={<Category />} />

        {/* Single Blog Page */}
        <Route path='/blog/:id' element={<DedicatedBlog />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

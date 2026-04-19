import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../07-navbar/Navbar'
import './Layout.css'
import Home from '../03-home/Home'
import History from '../04-history/History'
import About from '../05-about/About'
import NotFound from '../08-not-found/NotFound'

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default Layout
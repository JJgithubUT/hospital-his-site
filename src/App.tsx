import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogSingle from './pages/BlogSingle'
import Contact from './pages/Contact'
import Domain from './pages/Domain'
import Home from './pages/Home'
import Hosting from './pages/Hosting'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/hosting" element={<Hosting />} />
      </Route>
    </Routes>
  )
}

export default App

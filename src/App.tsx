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
        <Route path="/notas" element={<Blog />} />
        <Route path="/notas/nota-de-alcance" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/descargas" element={<Domain />} />
        <Route path="/roles" element={<Hosting />} />
      </Route>
    </Routes>
  )
}

export default App

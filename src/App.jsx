import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import HomePage from './components/home/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF7F2] text-[#141A24] flex flex-col font-sans selection:bg-[#17382E] selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

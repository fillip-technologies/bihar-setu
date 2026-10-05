import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { useScrollToHash } from '../hooks/useScrollToHash'

export default function RootLayout() {
  useScrollToHash()

  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import FocusAreas from '../pages/FocusAreas'
import Contact from '../pages/Contact'
import Partner from '../pages/Partner'
import HowWeWork from '../pages/HowWeWork'
import Initiatives from '../pages/Initiatives'
import Legal from '../pages/Legal'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="focus-areas" element={<FocusAreas />} />
        <Route path="how-we-work" element={<HowWeWork />} />
        <Route path="initiatives" element={<Initiatives />} />
        <Route path="our-initiatives" element={<Initiatives />} />
        <Route path="innovaties" element={<Initiatives />} />
        <Route path="tourism-summit-2026" element={<Initiatives />} />
        <Route path="explore" element={<About />} />
        <Route path="partner-with-us" element={<Partner />} />
        <Route path="partner" element={<Partner />} />
        <Route path="contact" element={<Contact />} />
        <Route path="schemes" element={<Navigate to="/initiatives" replace />} />
        <Route path="grievance" element={<Navigate to="/contact" replace />} />
        <Route path="privacy-policy" element={<Legal />} />
        <Route path="terms-of-use" element={<Legal />} />
        <Route path="legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

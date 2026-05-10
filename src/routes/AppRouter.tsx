import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { siteContent } from '../data/content'

const Home = lazy(() => import('../pages/Home'))
const Services = lazy(() => import('../pages/Services'))
const About = lazy(() => import('../pages/About'))
const Projects = lazy(() => import('../pages/Projects'))
const Contact = lazy(() => import('../pages/Contact'))
const FAQ = lazy(() => import('../pages/FAQ'))
const NotFound = lazy(() => import('../pages/NotFound'))

export function AppRouter() {
  return (
    <Suspense fallback={<div className="px-4 py-20 text-center text-slate-300">{siteContent.labels.loadingPage}</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollContactFab } from './components/ScrollContactFab'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_-10%,rgba(255,255,255,0.65),transparent_48%),linear-gradient(135deg,rgba(224,242,254,0.35)_0%,transparent_42%)]" />
      <Navbar />
      <main className="relative z-10 flex-1">
        <AppRouter />
      </main>
      <ScrollContactFab />
      <Footer />
    </div>
  )
}

export default App

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.14),transparent_25%),radial-gradient(circle_at_85%_0%,rgba(6,182,212,0.12),transparent_22%)]" />
      <Navbar />
      <main className="relative z-10 flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App

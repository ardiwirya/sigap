import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'

export default function WargaLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}

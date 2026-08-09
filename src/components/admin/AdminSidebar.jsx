import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col bg-navy-900 md:flex">
      <div className="flex items-center gap-2 px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 font-heading text-sm font-bold text-navy-900">
          S
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-white">SIGAP</p>
          <p className="text-xs text-navy-300">Panel Admin</p>
        </div>
      </div>

      <nav className="mt-4 flex flex-col gap-1 px-3">
        <span className="flex items-center gap-3 rounded-md bg-navy-700 px-3 py-2 text-sm font-medium text-white">
          Dashboard Pengaduan
        </span>
      </nav>

      <div className="mt-auto px-3 pb-5">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-navy-300 hover:bg-navy-800 hover:text-white"
        >
          Keluar ke Halaman Utama
        </Link>
      </div>
    </aside>
  )
}

import { NavLink, Link } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-navy-700 text-white' : 'text-navy-100 hover:bg-navy-700/60 hover:text-white'
  }`

export default function Navbar() {
  return (
    <header className="bg-navy-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 font-heading text-sm font-bold text-navy-900">
            S
          </span>
          <span className="font-heading text-base font-semibold text-white">SIGAP</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/warga/buat" className={navLinkClass}>
            Buat Pengaduan
          </NavLink>
          <NavLink to="/warga/riwayat" className={navLinkClass}>
            Riwayat Laporan
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

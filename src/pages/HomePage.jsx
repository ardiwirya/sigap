import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-navy-900">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400 font-heading text-xl font-bold text-navy-900">
          S
        </span>

        <h1 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl">
          Sistem Layanan Pengaduan Masyarakat
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-200 sm:text-base">
          SIGAP membantu warga menyampaikan pengaduan mengenai fasilitas dan pelayanan publik,
          serta memudahkan petugas memantau dan menindaklanjuti setiap laporan yang masuk.
        </p>

        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
          <Link
            to="/warga/buat"
            className="group rounded-xl border border-navy-700 bg-navy-800 p-6 text-left transition-colors hover:border-gold-400"
          >
            <p className="font-heading text-lg font-semibold text-white">Saya Warga</p>
            <p className="mt-1.5 text-sm text-navy-300">
              Buat pengaduan baru atau pantau status laporan yang sudah dikirim.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-gold-400 group-hover:underline">
              Masuk sebagai warga &rarr;
            </span>
          </Link>

          <Link
            to="/admin"
            className="group rounded-xl border border-navy-700 bg-navy-800 p-6 text-left transition-colors hover:border-gold-400"
          >
            <p className="font-heading text-lg font-semibold text-white">Saya Petugas</p>
            <p className="mt-1.5 text-sm text-navy-300">
              Kelola daftar pengaduan masuk dan perbarui status tindak lanjut.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-gold-400 group-hover:underline">
              Masuk ke dashboard admin &rarr;
            </span>
          </Link>
        </div>
      </div>

      <footer className="border-t border-navy-800 py-4 text-center text-xs text-navy-400">
        SIGAP - Sistem Informasi Pengaduan Masyarakat
      </footer>
    </div>
  )
}

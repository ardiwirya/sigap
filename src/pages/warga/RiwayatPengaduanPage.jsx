import { Link } from 'react-router-dom'
import RiwayatCard from '../../components/warga/RiwayatCard'
import { usePengaduanStore } from '../../store/pengaduanStore'

export default function RiwayatPengaduanPage() {
  const daftarPengaduan = usePengaduanStore((state) => state.daftarPengaduan)

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold text-slate-900">Riwayat Laporan</h1>
        <p className="mt-1 text-sm text-slate-500">Daftar seluruh pengaduan yang pernah dikirim.</p>
      </div>

      {daftarPengaduan.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-sm text-slate-500">Belum ada pengaduan yang dikirim.</p>
          <Link to="/warga/buat" className="mt-3 inline-block text-sm font-medium text-navy-700 hover:underline">
            Buat pengaduan pertama Anda
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {daftarPengaduan.map((pengaduan) => (
            <RiwayatCard key={pengaduan.id} pengaduan={pengaduan} />
          ))}
        </div>
      )}
    </div>
  )
}

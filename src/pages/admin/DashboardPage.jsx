import { useMemo, useState } from 'react'
import StatCard from '../../components/admin/StatCard'
import StatusFilter from '../../components/admin/StatusFilter'
import PengaduanTable from '../../components/admin/PengaduanTable'
import { usePengaduanStore } from '../../store/pengaduanStore'
import { STATUS_PENGADUAN } from '../../constants'

export default function DashboardPage() {
  const daftarPengaduan = usePengaduanStore((state) => state.daftarPengaduan)
  const [statusFilter, setStatusFilter] = useState('semua')

  const statistik = useMemo(() => {
    return {
      total: daftarPengaduan.length,
      pending: daftarPengaduan.filter((item) => item.status === STATUS_PENGADUAN.PENDING).length,
      onProgress: daftarPengaduan.filter((item) => item.status === STATUS_PENGADUAN.ON_PROGRESS).length,
      resolved: daftarPengaduan.filter((item) => item.status === STATUS_PENGADUAN.RESOLVED).length,
    }
  }, [daftarPengaduan])

  const pengaduanTersaring = useMemo(() => {
    if (statusFilter === 'semua') return daftarPengaduan
    return daftarPengaduan.filter((item) => item.status === statusFilter)
  }, [daftarPengaduan, statusFilter])

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold text-slate-900">Dashboard Pengaduan</h1>
        <p className="mt-1 text-sm text-slate-500">Pantau dan tindak lanjuti laporan yang masuk dari warga.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Pengaduan" value={statistik.total} accent="text-navy-700" />
        <StatCard label="Menunggu Verifikasi" value={statistik.pending} accent="text-amber-600" />
        <StatCard label="Sedang Diproses" value={statistik.onProgress} accent="text-blue-600" />
        <StatCard label="Selesai" value={statistik.resolved} accent="text-emerald-600" />
      </div>

      <div className="mt-8 mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-heading text-lg font-semibold text-slate-900">Daftar Pengaduan</h2>
        <StatusFilter activeFilter={statusFilter} onChange={setStatusFilter} />
      </div>

      <PengaduanTable daftarPengaduan={pengaduanTersaring} />
    </div>
  )
}

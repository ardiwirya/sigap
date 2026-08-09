import StatusBadge from '../common/StatusBadge'
import { formatDate } from '../../utils/formatDate'

export default function RiwayatCard({ pengaduan }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-navy-500">{pengaduan.id}</p>
          <h3 className="mt-1 font-heading text-base font-semibold text-slate-900">{pengaduan.judul}</h3>
        </div>
        <StatusBadge status={pengaduan.status} />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">{pengaduan.deskripsi}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
        <span>{pengaduan.kategori}</span>
        <span className="text-slate-300">|</span>
        <span>{pengaduan.lokasi}</span>
        <span className="text-slate-300">|</span>
        <span>{formatDate(pengaduan.tanggal)}</span>
      </div>
    </div>
  )
}

import StatusBadge from '../common/StatusBadge'
import { STATUS_OPTIONS } from '../../constants'
import { formatDateTime } from '../../utils/formatDate'
import { usePengaduanStore } from '../../store/pengaduanStore'

export default function PengaduanTable({ daftarPengaduan }) {
  const ubahStatus = usePengaduanStore((state) => state.ubahStatus)

  if (daftarPengaduan.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
        <p className="text-sm text-slate-500">Tidak ada pengaduan untuk filter ini.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <th className="px-4 py-3 font-medium">Tiket</th>
            <th className="px-4 py-3 font-medium">Judul</th>
            <th className="px-4 py-3 font-medium">Kategori</th>
            <th className="px-4 py-3 font-medium">Pelapor</th>
            <th className="px-4 py-3 font-medium">Tanggal</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Ubah Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {daftarPengaduan.map((item) => (
            <tr key={item.id} className="align-top">
              <td className="whitespace-nowrap px-4 py-3.5 font-medium text-navy-700">{item.id}</td>
              <td className="px-4 py-3.5">
                <p className="font-medium text-slate-900">{item.judul}</p>
                <p className="mt-0.5 max-w-xs truncate text-xs text-slate-500">{item.lokasi}</p>
              </td>
              <td className="px-4 py-3.5 text-slate-600">{item.kategori}</td>
              <td className="px-4 py-3.5 text-slate-600">{item.namaPelapor}</td>
              <td className="whitespace-nowrap px-4 py-3.5 text-slate-600">{formatDateTime(item.tanggal)}</td>
              <td className="px-4 py-3.5">
                <StatusBadge status={item.status} />
              </td>
              <td className="px-4 py-3.5">
                <select
                  value={item.status}
                  onChange={(event) => ubahStatus(item.id, event.target.value)}
                  className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-100"
                >
                  {STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

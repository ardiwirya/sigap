import { useState } from 'react'
import PengaduanForm from '../../components/warga/PengaduanForm'
import TrackingReceipt from '../../components/warga/TrackingReceipt'

export default function BuatPengaduanPage() {
  const [pengaduanTerkirim, setPengaduanTerkirim] = useState(null)

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold text-slate-900">Buat Pengaduan</h1>
        <p className="mt-1 text-sm text-slate-500">
          Isi form berikut dengan informasi yang jelas agar laporan Anda dapat segera ditindaklanjuti.
        </p>
      </div>

      {pengaduanTerkirim ? (
        <TrackingReceipt pengaduan={pengaduanTerkirim} onBuatLagi={() => setPengaduanTerkirim(null)} />
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <PengaduanForm onSubmitted={setPengaduanTerkirim} />
        </div>
      )}
    </div>
  )
}

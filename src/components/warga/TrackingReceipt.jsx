export default function TrackingReceipt({ pengaduan, onBuatLagi }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p className="text-sm text-slate-500">Pengaduan berhasil dikirim</p>
      <p className="mt-1 font-heading text-2xl font-bold tracking-wide text-navy-800">{pengaduan.id}</p>
      <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
        Simpan nomor tiket ini untuk memantau status laporan Anda pada halaman Riwayat Laporan.
      </p>

      <button
        onClick={onBuatLagi}
        className="mt-5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Buat Pengaduan Lain
      </button>
    </div>
  )
}

// Daftar kategori pengaduan yang tersedia di form
export const KATEGORI_PENGADUAN = [
  'Infrastruktur',
  'Kebersihan',
  'Keamanan dan Ketertiban',
  'Pelayanan Publik',
  'Lainnya',
]

// Status pengaduan mengikuti alur: pending -> on_progress -> resolved
export const STATUS_PENGADUAN = {
  PENDING: 'pending',
  ON_PROGRESS: 'on_progress',
  RESOLVED: 'resolved',
}

// Label yang ditampilkan ke user, dipisah dari value internal
export const STATUS_LABEL = {
  [STATUS_PENGADUAN.PENDING]: 'Menunggu Verifikasi',
  [STATUS_PENGADUAN.ON_PROGRESS]: 'Sedang Diproses',
  [STATUS_PENGADUAN.RESOLVED]: 'Selesai',
}

// Kelas warna Tailwind untuk badge status, disatukan di sini biar konsisten
export const STATUS_BADGE_COLOR = {
  [STATUS_PENGADUAN.PENDING]: 'bg-amber-50 text-amber-700 border-amber-200',
  [STATUS_PENGADUAN.ON_PROGRESS]: 'bg-blue-50 text-blue-700 border-blue-200',
  [STATUS_PENGADUAN.RESOLVED]: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export const STATUS_OPTIONS = [
  { value: STATUS_PENGADUAN.PENDING, label: STATUS_LABEL[STATUS_PENGADUAN.PENDING] },
  { value: STATUS_PENGADUAN.ON_PROGRESS, label: STATUS_LABEL[STATUS_PENGADUAN.ON_PROGRESS] },
  { value: STATUS_PENGADUAN.RESOLVED, label: STATUS_LABEL[STATUS_PENGADUAN.RESOLVED] },
]

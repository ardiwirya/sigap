import { STATUS_PENGADUAN } from '../constants'

// Data awal ini hanya dipakai saat belum ada data tersimpan di localStorage.
// Setelah user membuat pengaduan baru, data akan bertambah dan tersimpan otomatis.
export const dummyPengaduan = [
  {
    id: 'PGD-2026-0001',
    judul: 'Lampu jalan mati di Jalan Merdeka',
    deskripsi:
      'Sudah sekitar dua minggu lampu penerangan jalan di depan RT 03 tidak menyala. Kondisi ini membuat jalan gelap dan cukup berbahaya untuk warga yang lewat malam hari.',
    kategori: 'Infrastruktur',
    lokasi: 'Jalan Merdeka No. 12, RT 03/RW 05',
    namaPelapor: 'Siti Rahayu',
    status: STATUS_PENGADUAN.ON_PROGRESS,
    tanggal: '2026-07-28T08:15:00.000Z',
  },
  {
    id: 'PGD-2026-0002',
    judul: 'Tumpukan sampah tidak diangkut',
    deskripsi:
      'Sampah di TPS sementara dekat Pasar Anyar sudah menumpuk lebih dari 5 hari dan mulai menimbulkan bau tidak sedap serta mengundang lalat.',
    kategori: 'Kebersihan',
    lokasi: 'TPS Pasar Anyar, Kelurahan Sukamaju',
    namaPelapor: 'Budi Santoso',
    status: STATUS_PENGADUAN.PENDING,
    tanggal: '2026-08-01T10:30:00.000Z',
  },
  {
    id: 'PGD-2026-0003',
    judul: 'Permohonan perbaikan drainase',
    deskripsi:
      'Saluran drainase di sekitar perumahan tersumbat sehingga menyebabkan genangan air setiap kali hujan turun. Mohon segera ditindaklanjuti sebelum musim hujan puncak.',
    kategori: 'Infrastruktur',
    lokasi: 'Perumahan Griya Asri Blok C',
    namaPelapor: 'Andi Wijaya',
    status: STATUS_PENGADUAN.RESOLVED,
    tanggal: '2026-07-15T14:00:00.000Z',
  },
  {
    id: 'PGD-2026-0004',
    judul: 'Pelayanan loket kelurahan lambat',
    deskripsi:
      'Antrean pembuatan surat pengantar di kantor kelurahan sangat panjang dan tidak ada sistem nomor antrean yang jelas, sehingga sering terjadi kericuhan kecil.',
    kategori: 'Pelayanan Publik',
    lokasi: 'Kantor Kelurahan Sukamaju',
    namaPelapor: 'Rina Marlina',
    status: STATUS_PENGADUAN.PENDING,
    tanggal: '2026-08-03T09:45:00.000Z',
  },
  {
    id: 'PGD-2026-0005',
    judul: 'Portal keamanan RW rusak',
    deskripsi:
      'Portal palang pintu masuk kompleks rusak dan tidak bisa ditutup, sehingga kendaraan bebas keluar masuk tanpa pengawasan satpam pada malam hari.',
    kategori: 'Keamanan dan Ketertiban',
    lokasi: 'Gerbang Utama Kompleks Griya Asri',
    namaPelapor: 'Hendra Kusuma',
    status: STATUS_PENGADUAN.ON_PROGRESS,
    tanggal: '2026-08-05T16:20:00.000Z',
  },
]

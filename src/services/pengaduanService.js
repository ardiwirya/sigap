import { STATUS_PENGADUAN } from '../constants'

// Simulasi delay jaringan supaya loading state di UI terasa nyata.
// Kalau nanti backend sudah tersedia, fungsi-fungsi di file ini tinggal
// diganti isinya dengan fetch/axios tanpa perlu mengubah kode di komponen.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Membuat nomor tiket pengaduan, contoh: PGD-2026-0006
function generateTrackingId(nomorUrut) {
  const tahun = new Date().getFullYear()
  const urut = String(nomorUrut).padStart(4, '0')
  return `PGD-${tahun}-${urut}`
}

export async function submitPengaduan(formValues, nomorUrutBerikutnya) {
  await delay(600)

  return {
    id: generateTrackingId(nomorUrutBerikutnya),
    ...formValues,
    status: STATUS_PENGADUAN.PENDING,
    tanggal: new Date().toISOString(),
  }
}

export async function updateStatusPengaduan(id, statusBaru) {
  await delay(300)
  return { id, status: statusBaru }
}

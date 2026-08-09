// Mengubah ISO string jadi format tanggal yang mudah dibaca, contoh: 5 Agustus 2026
export function formatDate(isoString) {
  const date = new Date(isoString)

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Versi lengkap dengan jam, dipakai di tabel admin
export function formatDateTime(isoString) {
  const date = new Date(isoString)

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

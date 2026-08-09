// Validasi sederhana berbasis rule, mengembalikan object error per field.
// Kalau object yang dikembalikan kosong, berarti form dianggap valid.
export function validatePengaduanForm(values) {
  const errors = {}

  if (!values.namaPelapor?.trim()) {
    errors.namaPelapor = 'Nama pelapor wajib diisi'
  }

  if (!values.judul?.trim()) {
    errors.judul = 'Judul pengaduan wajib diisi'
  } else if (values.judul.trim().length < 10) {
    errors.judul = 'Judul minimal 10 karakter'
  }

  if (!values.kategori) {
    errors.kategori = 'Silakan pilih kategori pengaduan'
  }

  if (!values.lokasi?.trim()) {
    errors.lokasi = 'Lokasi kejadian wajib diisi'
  }

  if (!values.deskripsi?.trim()) {
    errors.deskripsi = 'Deskripsi wajib diisi'
  } else if (values.deskripsi.trim().length < 20) {
    errors.deskripsi = 'Deskripsi minimal 20 karakter agar laporan lebih jelas'
  }

  return errors
}

import { useState } from 'react'
import { KATEGORI_PENGADUAN } from '../../constants'
import { validatePengaduanForm } from '../../utils/validatePengaduanForm'
import { usePengaduanStore } from '../../store/pengaduanStore'

const initialValues = {
  namaPelapor: '',
  judul: '',
  kategori: '',
  lokasi: '',
  deskripsi: '',
}

export default function PengaduanForm({ onSubmitted }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const tambahPengaduan = usePengaduanStore((state) => state.tambahPengaduan)
  const isSubmitting = usePengaduanStore((state) => state.isSubmitting)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validatePengaduanForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    const pengaduanBaru = await tambahPengaduan(values)
    setValues(initialValues)
    onSubmitted(pengaduanBaru)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="namaPelapor" className="mb-1.5 block text-sm font-medium text-slate-700">
          Nama Pelapor
        </label>
        <input
          id="namaPelapor"
          name="namaPelapor"
          type="text"
          value={values.namaPelapor}
          onChange={handleChange}
          placeholder="Nama lengkap Anda"
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-100"
        />
        {errors.namaPelapor && <p className="mt-1.5 text-xs text-red-600">{errors.namaPelapor}</p>}
      </div>

      <div>
        <label htmlFor="judul" className="mb-1.5 block text-sm font-medium text-slate-700">
          Judul Pengaduan
        </label>
        <input
          id="judul"
          name="judul"
          type="text"
          value={values.judul}
          onChange={handleChange}
          placeholder="Contoh: Lampu jalan mati di RT 03"
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-100"
        />
        {errors.judul && <p className="mt-1.5 text-xs text-red-600">{errors.judul}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="kategori" className="mb-1.5 block text-sm font-medium text-slate-700">
            Kategori
          </label>
          <select
            id="kategori"
            name="kategori"
            value={values.kategori}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-100"
          >
            <option value="">Pilih kategori</option>
            {KATEGORI_PENGADUAN.map((kategori) => (
              <option key={kategori} value={kategori}>
                {kategori}
              </option>
            ))}
          </select>
          {errors.kategori && <p className="mt-1.5 text-xs text-red-600">{errors.kategori}</p>}
        </div>

        <div>
          <label htmlFor="lokasi" className="mb-1.5 block text-sm font-medium text-slate-700">
            Lokasi Kejadian
          </label>
          <input
            id="lokasi"
            name="lokasi"
            type="text"
            value={values.lokasi}
            onChange={handleChange}
            placeholder="Contoh: Jalan Merdeka RT 03/RW 05"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-100"
          />
          {errors.lokasi && <p className="mt-1.5 text-xs text-red-600">{errors.lokasi}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="deskripsi" className="mb-1.5 block text-sm font-medium text-slate-700">
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          rows={5}
          value={values.deskripsi}
          onChange={handleChange}
          placeholder="Jelaskan kondisi yang Anda laporkan secara rinci"
          className="w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-100"
        />
        {errors.deskripsi && <p className="mt-1.5 text-xs text-red-600">{errors.deskripsi}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-navy-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? 'Mengirim Laporan...' : 'Kirim Pengaduan'}
      </button>
    </form>
  )
}

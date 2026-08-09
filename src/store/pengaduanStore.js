import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { dummyPengaduan } from '../data/dummyPengaduan'
import { submitPengaduan, updateStatusPengaduan } from '../services/pengaduanService'

export const usePengaduanStore = create(
  persist(
    (set, get) => ({
      daftarPengaduan: dummyPengaduan,
      isSubmitting: false,

      // Menambah pengaduan baru dari form warga.
      // Mengembalikan data yang baru dibuat supaya halaman form bisa
      // menampilkan nomor tiket ke user.
      tambahPengaduan: async (formValues) => {
        set({ isSubmitting: true })

        const nomorUrutBerikutnya = get().daftarPengaduan.length + 1
        const pengaduanBaru = await submitPengaduan(formValues, nomorUrutBerikutnya)

        set((state) => ({
          daftarPengaduan: [pengaduanBaru, ...state.daftarPengaduan],
          isSubmitting: false,
        }))

        return pengaduanBaru
      },

      // Dipakai admin untuk mengubah status pengaduan lewat dropdown di tabel
      ubahStatus: async (id, statusBaru) => {
        await updateStatusPengaduan(id, statusBaru)

        set((state) => ({
          daftarPengaduan: state.daftarPengaduan.map((item) =>
            item.id === id ? { ...item, status: statusBaru } : item
          ),
        }))
      },
    }),
    {
      name: 'sigap-pengaduan-storage', // key yang dipakai di localStorage
    }
  )
)

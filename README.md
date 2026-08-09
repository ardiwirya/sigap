# SIGAP - Sistem Layanan Pengaduan Masyarakat

SIGAP adalah aplikasi front-end untuk mengelola pengaduan masyarakat, mulai dari warga yang ingin melaporkan masalah di lingkungan sekitar hingga admin yang bertugas menindaklanjuti laporan tersebut. Aplikasi ini dibangun sebagai simulasi sistem layanan publik, lengkap dengan data awal (dummy data) sehingga dapat langsung dicoba tanpa perlu backend.

Project ini dibuat dengan struktur yang sederhana dan mudah dipelajari, cocok dijadikan referensi untuk memahami pola pengembangan aplikasi React dengan state management Zustand.

Live demo: [SIGAP](https://sigap-aduan.vercel.app)

## Preview

- Halaman utama (pemilihan peran warga/admin)
<p align="center">
<img src="docs/home.png" alt="Halaman Utama" width="70%" />

- Form pembuatan pengaduan
<p align="center">
<img src="docs/form.png" alt="form aduan" width="70%" />

- Dashboard admin dengan tabel dan statistik
<p align="center">
<img src="docs/admin.png" alt="dasboard admin" width="70%" />

## Fitur

### Halaman Warga

- Form pembuatan pengaduan dengan field nama pelapor, judul, kategori, lokasi, dan deskripsi
- Validasi form di sisi client sebelum data dikirim
- Nomor tiket otomatis setiap kali pengaduan berhasil dibuat, contoh: `PGD-2026-0006`
- Halaman riwayat yang menampilkan seluruh pengaduan beserta status terkininya

### Dashboard Admin

- Daftar seluruh pengaduan yang masuk dalam bentuk tabel
- Filter pengaduan berdasarkan status: Menunggu Verifikasi, Sedang Diproses, Selesai
- Aksi mengubah status pengaduan langsung dari tabel
- Ringkasan statistik jumlah pengaduan per status

### Lainnya

- Data pengaduan tersimpan di localStorage sehingga tetap ada saat halaman di-refresh
- Data awal (dummy data) langsung tersedia saat aplikasi pertama kali dijalankan
- Tampilan responsif untuk perangkat desktop maupun mobile

## Tech Stack

- React 18
- Vite sebagai build tool
- Tailwind CSS untuk styling
- Zustand untuk state management, dengan middleware persist untuk penyimpanan lokal
- React Router untuk navigasi antar halaman

## Struktur Folder

```
src/
  assets/            aset statis seperti gambar atau ikon tambahan
  components/
    common/          komponen yang dipakai lintas halaman, contoh Navbar dan StatusBadge
    warga/           komponen khusus halaman warga, contoh PengaduanForm
    admin/           komponen khusus dashboard admin, contoh PengaduanTable
  constants/         daftar kategori, status, dan konfigurasi tetap lainnya
  data/              data dummy sebagai isi awal aplikasi
  layouts/           kerangka halaman (navbar/sidebar) yang membungkus setiap page
  pages/             halaman yang terhubung langsung ke routing
    warga/
    admin/
  services/          simulasi pemanggilan API, tempat logika ini akan diganti saat backend tersedia
  store/             store Zustand untuk state pengaduan
  utils/              fungsi bantu seperti format tanggal dan validasi form
  App.jsx            deklarasi routing aplikasi
  main.jsx           entry point React
  index.css          import Tailwind dan style global
```

## Cara Instalasi

Pastikan Node.js versi 18 ke atas sudah terpasang, lalu jalankan:

```bash
npm install
```

## Cara Menjalankan Project

Menjalankan mode development:

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`.

Build untuk production:

```bash
npm run build
```

Melihat hasil build secara lokal:

```bash
npm run preview
```

## Alur Penggunaan

1. Buka halaman utama, lalu pilih masuk sebagai Warga atau sebagai Petugas (Admin).
2. Sebagai warga, isi form pengaduan pada menu Buat Pengaduan. Setelah berhasil, sistem akan menampilkan nomor tiket pengaduan.
3. Riwayat pengaduan yang sudah dikirim dapat dilihat pada menu Riwayat Laporan.
4. Sebagai admin, buka Dashboard untuk melihat seluruh pengaduan, memfilter berdasarkan status, dan mengubah status setiap laporan.

## License

Project ini dirilis di bawah lisensi MIT. Lihat file [LICENSE](./LICENSE) untuk detail lengkap.

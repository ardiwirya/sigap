import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WargaLayout from './layouts/WargaLayout'
import BuatPengaduanPage from './pages/warga/BuatPengaduanPage'
import RiwayatPengaduanPage from './pages/warga/RiwayatPengaduanPage'
import AdminLayout from './layouts/AdminLayout'
import DashboardPage from './pages/admin/DashboardPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/warga" element={<WargaLayout />}>
        <Route path="buat" element={<BuatPengaduanPage />} />
        <Route path="riwayat" element={<RiwayatPengaduanPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

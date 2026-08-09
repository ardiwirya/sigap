export default function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`mt-2 font-heading text-3xl font-bold ${accent}`}>{value}</p>
    </div>
  )
}

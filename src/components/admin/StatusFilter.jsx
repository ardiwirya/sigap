import { STATUS_OPTIONS } from '../../constants'

export default function StatusFilter({ activeFilter, onChange }) {
  const filters = [{ value: 'semua', label: 'Semua' }, ...STATUS_OPTIONS]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = filter.value === activeFilter

        return (
          <button
            key={filter.value}
            onClick={() => onChange(filter.value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'border-navy-700 bg-navy-700 text-white'
                : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

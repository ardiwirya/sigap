import { STATUS_LABEL, STATUS_BADGE_COLOR } from '../../constants'

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${STATUS_BADGE_COLOR[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  )
}

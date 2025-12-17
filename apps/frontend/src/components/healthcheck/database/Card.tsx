import { StatusBadge } from '@/components/healthcheck/StatusBadge'
import type { CardProps } from '@/components/healthcheck/types'

export const Card = ({ title, item, icon }: CardProps) => (
  <div className="h-fit rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
        <span className="text-2xl">{icon}</span>
        {title}
      </h3>
      <StatusBadge status={item.status} />
    </div>
    <div className="space-y-2">
      {item.total !== undefined && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Total</span>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.total}</span>
        </div>
      )}
      {item.error && (
        <div className="mt-3 rounded-md bg-red-50 p-3 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-400">{item.error}</p>
        </div>
      )}
    </div>
  </div>
)

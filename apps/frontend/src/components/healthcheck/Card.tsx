import type { CardProps } from './types'
import { StatusBadge } from './StatusBadge'

export const Card = ({ title, item, icon }: CardProps) => (
  <div className="bg-white h-fit dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
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
        <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
          <p className="text-sm text-red-800 dark:text-red-400">{item.error}</p>
        </div>
      )}
    </div>
  </div>
)

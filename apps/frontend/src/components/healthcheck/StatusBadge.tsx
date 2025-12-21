import { Typography } from '@/components/atoms/typography'

export const StatusBadge = ({ status }: { status: string }) => {
  const isOk = status === 'OK'
  return (
    <Typography
      as="span"
      weight="medium"
      size="xxs"
      color="inherit"
      className={`inline-flex items-center rounded-full px-3 py-1 ${
        isOk
          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      }`}
    >
      <div className={`mr-2 h-2 w-2 rounded-full ${isOk ? 'bg-green-500' : 'bg-red-500'}`} />
      {status}
    </Typography>
  )
}

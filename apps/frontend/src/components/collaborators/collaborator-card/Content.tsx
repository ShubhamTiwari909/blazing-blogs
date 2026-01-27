import { LuBriefcase, LuCalendar, LuMail, LuUser } from 'react-icons/lu'
import { Typography } from '@/components/atoms/typography'
import { ContentProps } from './types'

const Content = ({ username, email, profession, createdAt }: ContentProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
        <LuUser className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <Typography as="p" size="xs" color="inherit" weight="medium" className="break-all">
          {username}
        </Typography>
      </div>
      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
        <LuMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <Typography as="p" size="xs" color="inherit" weight="medium" className="break-all">
          {email}
        </Typography>
      </div>
      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
        <LuBriefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <Typography as="p" size="xs" color="inherit" weight="medium" className="break-all">
          {profession}
        </Typography>
      </div>
      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
        <LuCalendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        <Typography as="p" size="xs" color="inherit" weight="medium" className="break-all">
          Joined{' '}
          {new Date(createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
      </div>
    </div>
  )
}

export default Content

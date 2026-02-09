import { Typography } from '@/components/atoms/typography'
import type { Skill as SkillType } from './types'
import { cn } from '@/lib/utils'

const Skill = ({ skill, gradient }: SkillType) => {
  return (
    <div
      className={cn(
        'group/skill relative overflow-hidden rounded-xl border bg-linear-to-br px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:shadow-current/20',
        gradient,
      )}
    >
      <Typography
        as="span"
        size="xxs"
        color="inherit"
        weight="semibold"
        className="text-foreground/90 group-hover/skill:text-foreground relative z-10 transition-colors"
      >
        {skill}
      </Typography>
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-xl bg-linear-to-br opacity-0 blur-sm transition-opacity duration-300 group-hover/skill:opacity-100',
          gradient,
        )}
      />
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute top-0 left-0 h-full w-full -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover/skill:translate-x-full" />
      </div>
    </div>
  )
}

export default Skill

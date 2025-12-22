export const cardStyles = ({color}: {color: string}) => {
    const gradientMap: Record<string, string> = {
        'text-blue-500':
          'group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:via-blue-400/10 group-hover:to-cyan-500/10',
        'text-green-500':
          'group-hover:bg-gradient-to-br group-hover:from-green-500/10 group-hover:via-emerald-400/10 group-hover:to-teal-500/10',
        'text-purple-500':
          'group-hover:bg-gradient-to-br group-hover:from-purple-500/10 group-hover:via-pink-400/10 group-hover:to-fuchsia-500/10',
        'text-yellow-500':
          'group-hover:bg-gradient-to-br group-hover:from-yellow-500/10 group-hover:via-orange-400/10 group-hover:to-amber-500/10',
      }
      const cardGradient =
        gradientMap[color] ||
        'group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary/5'

      const iconHoverColor: Record<string, string> = {
        'text-blue-500': 'group-hover:text-blue-400',
        'text-green-500': 'group-hover:text-green-400',
        'text-purple-500': 'group-hover:text-purple-400',
        'text-yellow-500': 'group-hover:text-yellow-400',
      }
      const iconHover = iconHoverColor[color] || 'group-hover:text-primary'

      const titleHoverColor: Record<string, string> = {
        'text-blue-500': 'group-hover:text-blue-500',
        'text-green-500': 'group-hover:text-green-500',
        'text-purple-500': 'group-hover:text-purple-500',
        'text-yellow-500': 'group-hover:text-yellow-500',
      }
      const titleHover = titleHoverColor[color] || 'group-hover:text-primary'

      const iconBgGradient: Record<string, string> = {
        'text-blue-500':
          'group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:via-blue-400/20 group-hover:to-cyan-500/20',
        'text-green-500':
          'group-hover:bg-gradient-to-br group-hover:from-green-500/30 group-hover:via-emerald-400/20 group-hover:to-teal-500/20',
        'text-purple-500':
          'group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:via-pink-400/20 group-hover:to-fuchsia-500/20',
        'text-yellow-500':
          'group-hover:bg-gradient-to-br group-hover:from-yellow-500/30 group-hover:via-orange-400/20 group-hover:to-amber-500/20',
      }
      const iconBg =
        iconBgGradient[color] ||
        'group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20'

      return {
        cardGradient,
        iconHover,
        titleHover,
        iconBg,
      }
}

export const skillStyles = ({color}: {color: string}) => {
    const gradientMap: Record<string, string> = {
        'text-blue-500':
          'from-blue-500/20 via-blue-400/20 to-cyan-500/20 hover:from-blue-500/30 hover:via-blue-400/30 hover:to-cyan-500/30 border-blue-500/30',
        'text-green-500':
          'from-green-500/20 via-emerald-400/20 to-teal-500/20 hover:from-green-500/30 hover:via-emerald-400/30 hover:to-teal-500/30 border-green-500/30',
        'text-purple-500':
          'from-purple-500/20 via-pink-400/20 to-fuchsia-500/20 hover:from-purple-500/30 hover:via-pink-400/30 hover:to-fuchsia-500/30 border-purple-500/30',
        'text-yellow-500':
          'from-yellow-500/20 via-orange-400/20 to-amber-500/20 hover:from-yellow-500/30 hover:via-orange-400/30 hover:to-amber-500/30 border-yellow-500/30',
      }
      const gradient =
        gradientMap[color] || 'from-primary/20 to-primary/30 border-primary/30'

      return {
        gradient,
      }

}
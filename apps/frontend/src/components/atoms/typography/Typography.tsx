import React from 'react'

import { typographyVariants } from './variants'
import { TypographyProps } from './types'
import { cn } from '@/lib/utils'

export const Typography = ({
  className,
  variant,
  size,
  weight,
  color,
  align,
  transform,
  as = 'p',
  children,
  ...props
}: TypographyProps) => {
  const Component = as

  return (
    <Component
      className={cn(
        typographyVariants({ variant, size, weight, color, align, transform, className }),
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

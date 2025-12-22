import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './Button'

export type ChildrenProps = {
  children: React.ReactNode
}

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

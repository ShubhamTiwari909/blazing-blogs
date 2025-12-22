import { buttonVariants } from "./Button"
import { VariantProps } from "class-variance-authority"

export type ChildrenProps = {
  children: React.ReactNode
}

export type ButtonProps = React.ComponentProps<'button'> &
VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}
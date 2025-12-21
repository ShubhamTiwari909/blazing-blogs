import { VariantProps } from 'class-variance-authority'
import { typographyVariants } from './variants'

export type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'small'
  | 'blockquote'
  | 'code'
  | 'pre'
  | 'strong'

export type TypographyProps = {
  as: TypographyElement
  children: React.ReactNode
  className?: string
} & VariantProps<typeof typographyVariants>

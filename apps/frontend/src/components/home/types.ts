type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

export type TextAnimationProps = {
  tag: Tags
  children: React.ReactNode
  className: string
}

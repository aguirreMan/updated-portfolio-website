import type { ComponentProps } from 'react'

export const mdxComponents = {
  // Wraps the entire MDX document, matching the outer spacing the .tsx
  // studies get from their own <div className='flex flex-col gap-14'>.
  wrapper: (props: ComponentProps<'div'>) => (
    <div className='flex flex-col gap-14' {...props} />
  ),

  p: (props: ComponentProps<'p'>) => (
    <p className='text-muted-foreground leading-7 max-w-2xl' {...props} />
  ),

  ul: (props: ComponentProps<'ul'>) => (
    <ul className='list-disc pl-5 space-y-2 text-muted-foreground leading-7 max-w-2xl' {...props} />
  ),

  ol: (props: ComponentProps<'ol'>) => (
    <ol className='list-decimal pl-5 space-y-2 text-muted-foreground leading-7 max-w-2xl' {...props} />
  ),

  li: (props: ComponentProps<'li'>) => <li className='pl-1' {...props} />,

  h3: (props: ComponentProps<'h3'>) => (
    <h3 className='text-foreground font-medium mt-8 mb-2' {...props} />
  ),

  h4: (props: ComponentProps<'h4'>) => (
    <h4 className='text-foreground font-medium mt-6 mb-2' {...props} />
  ),

  strong: (props: ComponentProps<'strong'>) => (
    <strong className='text-foreground font-medium' {...props} />
  ),

  a: (props: ComponentProps<'a'>) => (
    <a
      className='text-foreground underline underline-offset-4 hover:text-primary transition-colors'
      {...props}
    />
  ),

  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote
      className='border-l-2 border-border pl-4 italic text-muted-foreground max-w-2xl'
      {...props}
    />
  ),

  // Inline code. The [&>code] resets on `pre` below undo this styling for
  // fenced blocks, since MDX emits both as <code>.
  code: (props: ComponentProps<'code'>) => (
    <code
      className='rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground'
      {...props}
    />
  ),

  pre: (props: ComponentProps<'pre'>) => (
    <pre
      className='bg-muted rounded-lg p-4 my-4 overflow-x-auto text-sm max-w-2xl [&>code]:bg-transparent [&>code]:p-0 [&>code]:rounded-none'
      {...props}
    />
  ),
}

interface CaseStudySectionProps {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  date?: string
}

export default function CaseStudySection({ id, title, description, children, date }: CaseStudySectionProps) {
  return (
    <section id={id} className='scroll-mt-24 py-12 border-b border-border'>
      {date && <p className='text-muted-foreground text-sm mb-2'>
        {date}
      </p>
      }
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      {description && (
        <p className='text-muted-foreground mb-6 max-w-2xl leading-7'>{description}</p>
      )}
      <div className='text-muted-foreground space-y-4 leading-relaxed'>
        {children}
      </div>
    </section>
  )
}

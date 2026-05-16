export default function CaseStudySection({ id, title, children}) {
  return (
    <section id={id} className='scroll-mt-4 py-12 border-b border-border'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div className='text-muted-foreground space-y-4 leading-relaxed'>
        {children}
      </div>
    </section>
  )
}

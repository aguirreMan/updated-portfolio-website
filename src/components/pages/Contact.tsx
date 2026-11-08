import { useState, useEffect, useRef } from 'react'
import { FieldSet } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface FormFields {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [formSubmit, setFormSubmit] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formFields, setFormFields] = useState<FormFields>({ name: '', email: '', message: '' })
  const [errorForm, setErrorForm] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    return () => {
      abortRef.current?.abort()
    }
  }, [])

  function formChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    setFormFields(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  function encode(data: Record<string, string>) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorForm(null)
    setSubmitting(true)

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formFields }),
        signal: controller.signal,
      })
      if (!response.ok) throw new Error('Failed to submit form')
      setFormSubmit(true)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return
      setErrorForm('Something went wrong. Please try again or email me directly.')
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null
        setSubmitting(false)
      }
    }
  }


  const contactEmail = 'aguirreman98@gmail.com'

  return (
    <section
      aria-labelledby="contact-heading"
      className="flex min-h-screen flex-col items-center justify-center
               bg-background px-6 pt-28 pb-16 md:px-24"
    >
      <h1
        id="contact-heading"
        className="text-center text-4xl font-bold text-foreground"
      >
        Let’s work together
      </h1>

      <p className="mt-4 max-w-md text-center text-muted-foreground">
        Have a frontend opportunity or project in mind? Send a message
        or email me directly.
      </p>

      <a
        href={`mailto:${contactEmail}`}
        className="mt-3 break-all rounded-sm text-blue-400 underline
                 underline-offset-4 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-accent-blue"
      >
        {contactEmail}
      </a>

      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 max-w-md text-center text-foreground"
      >
        {formSubmit
          ? 'Thank you! Your message was submitted successfully.'
          : submitting
            ? 'Sending your message…'
            : ''}
      </p>

      <p
        role="alert"
        aria-atomic="true"
        className="max-w-md text-center text-red-400"
      >
        {errorForm ?? ''}
      </p>

      {!formSubmit && (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={submitForm}
          aria-busy={submitting}
          className="mb-8 flex w-full max-w-md flex-col gap-4 pt-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <FieldSet>
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formFields.name}
              onChange={formChange}
            />
          </FieldSet>

          <FieldSet>
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formFields.email}
              onChange={formChange}
            />
          </FieldSet>

          <FieldSet>
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              required
              value={formFields.message}
              onChange={formChange}
              className="min-h-36 leading-relaxed"
            />
          </FieldSet>

          <Button
            className="w-full"
            size="lg"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Send message'}
          </Button>
        </form>
      )}
    </section>
  )
}

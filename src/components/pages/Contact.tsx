import { useState, useEffect, useRef } from 'react'
import { Coffee } from 'lucide-react'
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
    setFormFields(prev => ({ ...prev, [event.target.name]: event.target.value}))
  }

  function encode(data: Record<string, string>) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
            '=' +
          encodeURIComponent(data[key])
        )
        .join('&')
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
      setSubmitting(false)
    }
  }

  if (formSubmit) {
    return (
      <div className="flex flex-col items-center min-h-screen px-6 md:px-24 justify-center bg-background">
        <h1 className="flex flex-row gap-2 text-4xl text-foreground">
          Let's grab a cup of{' '}
          <Coffee className="w-10 h-10 text-amber-950" strokeWidth={2.5} />
        </h1>
        <p className="text-xl text-muted-foreground">Thank you for your message!</p>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col items-center min-h-screen px-6 md:px-24 justify-center bg-background">
      <h1 className="flex flex-row gap-2 text-4xl text-foreground">
        Let's grab a cup of{' '}
        <Coffee className="w-10 h-10 text-amber-950" strokeWidth={2.5} />
      </h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={submitForm}
        className="w-full max-w-md mb-8 flex flex-col gap-4 pt-4"
      >
        <Input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <FieldSet>
          <Label className="font-medium text-sm">Name</Label>
          <Input
            name="name"
            type="text"
            required
            value={formFields.name}
            onChange={formChange}
            className=" border transition-all duration-200"
          />
        </FieldSet>
        <FieldSet>
          <Label className="text-foreground font-medium text-sm">Email</Label>
          <Input
            name="email"
            type="email"
            required
            value={formFields.email}
            onChange={formChange}
            className="transition-all duration-200"
          />
        </FieldSet>
        <FieldSet>
          <Label className="text-foreground font-medium text-sm">
            Message
          </Label>
          <Textarea
            name="message"
            placeholder="Send message here"
            required
            value={formFields.message}
            onChange={formChange}
            className="transition-all duration-200 leading-relaxed"
          />

          {errorForm && <p className="text-sm text-red-500 mt-2">{errorForm}</p>}
        </FieldSet>
        <Button
          className="w-full cursor-pointer"
          size="lg"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

import { useState } from 'react'
import { Coffee } from 'lucide-react'
import { FieldSet } from '../ui/field'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function Contact() {
  const [formSubmit, setFormSubmit] = useState(false)
  const [formFields, setFormFields] = useState({ name: '', email: '', message: '' })

  function formChange(event) {
    setFields(prev => ({ ...prev, [event.target.name]: event.target.value}))
  }

  function encode(data) {
      return Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) +
            '=' +
            encodeURIComponent(data[key])
        )
        .join('&')
    }

  async function submitForm(event) {
    event.preventDefault()
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formFields }),
    }),
    setFormSubmit(true)
  }

  if (formSubmit) {
    return (
      <div className="flex flex-col items-center min-h-screen px-24
        justify-center bg-background"
      >
        <h1 className="flex flex-row gap-2 text-4xl text-foreground">
          Lets grab a cup of{' '}
          <Coffee className="w-10 h-10 text-muted-foreground" strokeWidth={2.5} />
        </h1>
        <p className="text-xl text-muted-foreground">Thank you for your message!</p>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col items-center min-h-screen px-24
        justify-center bg-background"
    >
      <h1 className="flex flex-row gap-2 text-4xl text-foreground">
        Lets grab a cup of{' '}
        <Coffee className="w-10 h-10 text-muted-foreground" strokeWidth={2.5} />
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
            Lets schedule a coffee meeting
          </Label>
          <Textarea
            name="message"
            placeholder="Send message here"
            required
            value={formFields.message}
            onChange={formChange}
            className="transition-all duration-200 leading-relaxed"
          />
        </FieldSet>
        <Button className="w-full cursor-pointer" size="lg" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  )
}

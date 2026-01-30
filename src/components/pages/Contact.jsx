import { Coffee } from 'lucide-react'
import { FieldSet } from '../ui/field'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function Contact() {

    return (
        <div className='flex flex-col items-center min-h-screen px-24 
        justify-center bg-background px-8'>
            <h1 className='flex flex-row gap-2 text-4xl text-foreground'>
                Lets grab a cup of <Coffee className='w-10 h-10 text-muted-foreground' strokeWidth={2.5} />
            </h1>
            <form
                name='contact'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                className='w-full max-w-md mb-8 flex flex-col gap-4 pt-4'
            >

                <Input type='hidden' name='form-name' value='contact' />
                <input type='hidden' name='bot-field' />

                <FieldSet>
                    <Label className='font-medium text-sm'>
                        Name
                    </Label>
                    <Input
                        name='name'
                        type='text'
                        required
                        className=' border transition-all duration-200'
                    />
                </FieldSet>
                <FieldSet>
                    <Label className='text-foreground font-medium text-sm'>
                        Email
                    </Label>
                    <Input
                        name='email'
                        type='email'
                        required
                        className='transition-all duration-200'
                    />
                </FieldSet>
                <FieldSet>
                    <Label className='text-foreground font-medium text-sm'>
                        Lets schedule a coffee meeting
                    </Label>
                    <Textarea
                        name='message'
                        placeholder='Send message here'
                        required
                        className='transition-all duration-200 leading-relaxed'
                    />
                </FieldSet>
                <Button
                    className='w-full cursor-pointer' size='lg'
                    type='submit'
                >
                    Send Message
                </Button>
            </form>
        </div>
    )
}
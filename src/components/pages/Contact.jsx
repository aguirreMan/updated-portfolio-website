import { Coffee } from 'lucide-react'
import { FieldSet, FieldGroup, FieldLegend } from '../ui/field'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useState } from 'react'

export default function Contact() {

    return (
        <div className='bg-gradient-to-b from-[#00215b] via-[#131c29] to-[#101018] flex flex-col items-center h-screen p-24 '>
            <h1 className='flex flex-row gap-2 text-4xl'>
                Lets grab a cup of <Coffee className='w-10 h-10' strokeWidth={2.5} />
            </h1>
            <form className='w-full max-w-md mt-8 flex flex-col gap-6'>
                <Input type='hidden' name='form-name' value='contact' />
                <FieldSet>
                    <Label>Name</Label>
                    <Input
                        name='name'
                        type='text'
                        required
                    />
                </FieldSet>
                <FieldSet>
                    <Label>Email</Label>
                    <Input
                        name='email'
                        type='email'
                        required
                    />
                </FieldSet>
                <FieldSet>
                    <Label>Lets schedule a coffee meeting</Label>
                    <Textarea
                        className='leading-relaxed placeholder:white/30'
                        name='message'
                        placeholder='Send message here'
                        required
                    />
                </FieldSet>
                <Button
                    className='cursor-pointer'
                    type='submit'>Send Message</Button>
            </form>
        </div>
    )
}
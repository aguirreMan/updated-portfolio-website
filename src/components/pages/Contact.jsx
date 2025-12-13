import { Coffee } from 'lucide-react'
import { FieldSet, FieldGroup, FieldLegend } from '../ui/field'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function Contact() {

    return (
        <div className='bg-gradient-to-b from-[#00215b] via-[#131c29] to-[#101018] 
        flex flex-col items-center min-h-screen px-24 justify-center'>
            <h1 className='flex flex-row gap-2 text-4xl text-white'>
                Lets grab a cup of <Coffee className='w-10 h-10 text-[#6F4E37]' strokeWidth={2.5} />
            </h1>
            <form className='w-full max-w-md mb-8 flex flex-col gap-4 pt-4'>
                <Input type='hidden' name='form-name' value='contact' />
                <FieldSet>
                    <Label className='text-white/90 font-medium text-sm'>
                        Name
                    </Label>
                    <Input
                        name='name'
                        type='text'
                        required
                        className='bg-white/10 border border-white/20
                       text-white transition-all duration-200'
                    />
                </FieldSet>
                <FieldSet>
                    <Label className='text-white/90 font-medium text-sm'>
                        Email
                    </Label>
                    <Input
                        name='email'
                        type='email'
                        required
                        className='bg-white/10 border border-white/20
                     text-white transition-all duration-200'
                    />
                </FieldSet>
                <FieldSet>
                    <Label className='text-white/90 font-medium text-sm'>
                        Lets schedule a coffee meeting
                    </Label>
                    <Textarea
                        name='message'
                        placeholder='Send message here'
                        required
                        className='bg-white/10 border border-white/20 
                      placeholder:text-white/50 transition-all duration-200 
                      leading-relaxed'
                    />
                </FieldSet>
                <Button
                    className='bg-[#00215b] hover:bg-[#005de2] text-white 
                    font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl 
                    transform hover:scale-105 transition-all duration-200 
                    cursor-pointer'
                    type='submit'>Send Message</Button>
            </form>
        </div>
    )
}
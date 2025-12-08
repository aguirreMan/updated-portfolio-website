import { Coffee } from 'lucide-react'
import { FieldSet, FieldGroup, FieldLegend } from '../ui/field'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function Contact() {
    return (
        <div className='flex flex-col items-center h-screen p-24 '>
            <h1 className='flex flex-row gap-2 text-4xl'>
                Lets grab a cup of <Coffee className='w-10 h-10' strokeWidth={2.5} />
            </h1>
            <form className='w-full max-w-md mt-8 flex flex-col gap-6'>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Name</FieldLegend>
                    </FieldSet>
                </FieldGroup>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Email</FieldLegend>
                    </FieldSet>
                </FieldGroup>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Message</FieldLegend>
                    </FieldSet>
                </FieldGroup>
            </form>
        </div>
    )
}
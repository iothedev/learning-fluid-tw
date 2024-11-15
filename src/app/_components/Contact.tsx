import { Button, Input } from '@/components';

const Contact = () => (
    <div className='max-w-screen-xl w-full mx-auto px-5 ~mt-20/24'>
        <div className='flex items-center gap-12'>
            <div className='bg-accent-1 py-1 px-2 rounded-lg'>
                <h1 className='~text-xl/4xl font-medium'>Contact Us</h1>
            </div>
            <p className='~text-sm/base max-w-80'>
                Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
            </p>
        </div>

        <div className='overflow-hidden relative mt-12 rounded-[40px] w-full bg-background-3'>
            <img
                src='/media/contact.png'
                className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-64 hidden lg:block'
            />

            <div className='relative ~px-12/24 ~py-8/16 flex flex-col w-full lg:w-1/2'>
                <span className='mb-2 ~text-sm/base'>Name</span>
                <Input variant='primary' placeholder='Name' />

                <span className='~mt-4/8 ~text-sm/base mb-2'>Email*</span>
                <Input variant='primary' placeholder='Email' type='email' />

                <span className='~mt-4/8 ~text-sm/base mb-2'>Message*</span>
                <Input variant='primary' placeholder='Message' />

                <Button variant='primary' className='w-full ~mt-6/10'>
                    Send Message
                </Button>
            </div>
        </div>
    </div>
);

export { Contact };

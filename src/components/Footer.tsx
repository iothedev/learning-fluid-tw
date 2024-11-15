import Link from 'next/link';

import { Logo, Input, Button } from '@/components';

const Footer = () => (
    <div className='max-w-screen-xl w-full mx-auto ~mt-20/24'>
        <div className='bg-background-2 text-background-1 rounded-t-[45px] ~p-7/14'>
            <div className='flex items-center justify-between gap-4 flex-col sm:flex-row'>
                <Logo />

                <div className='flex items-center justify-center gap-4 text-center flex-wrap ~text-sm/base *:underline *:whitespace-nowrap'>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Services</Link>
                    <Link href='/'>Use Cases</Link>
                    <Link href='/'>Pricing</Link>
                </div>
            </div>

            <div className='~mt-8/10 flex md:items-center justify-between ~gap-8/10 flex-col md:flex-row'>
                <div className='flex flex-col ~text-xs/base'>
                    <div className='bg-accent-1 px-2 rounded-lg w-fit mb-3'>
                        <span className='text-background-2 ~text-sm/lg font-medium'>
                            Services
                        </span>
                    </div>
                    <span>info@positivus.com</span>
                    <span>555-567-8901</span>
                    <span>
                        1234 Main St Moonstone City, Stardust State 12345
                    </span>
                </div>

                <div className='bg-background-4 rounded-xl ~px-5/10 ~py-7/14 flex gap-4 flex-col sm:flex-row'>
                    <Input
                        variant='secondary'
                        placeholder='Email'
                        className='flex-1'
                    />
                    <Button variant='secondary' className='w-full sm:w-fit'>
                        Subscribe to news
                    </Button>
                </div>
            </div>

            <hr className='~mt-8/10' />

            <div className='~mt-8/10 flex items-center ~gap-4/12 ~text-xs/base flex-col sm:flex-row'>
                <span>© 2023 Positivus. All Rights Reserved.</span>
                <Link href='/' className='underline'>
                    Privacy Policy
                </Link>
            </div>
        </div>
    </div>
);

export { Footer };

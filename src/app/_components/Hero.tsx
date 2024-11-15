import { Button } from '@/components';

const Hero = () => (
    <div className='max-w-screen-xl w-full mx-auto px-5 ~mt-20/24'>
        <div className='flex justify-between items-center gap-24 flex-col sm:flex-row'>
            <div className='flex-1 flex flex-col'>
                <h1 className='max-w-screen-md ~text-3xl/6xl font-semibold !leading-snug'>
                    Navigating the digital landscape for success
                </h1>

                <img
                    src='/media/hero.png'
                    alt='Hero Image Mobile'
                    className='flex-1 flex sm:hidden ~mt-4/6'
                />

                <p className='text-foreground-2 ~text-sm/lg ~mt-4/6'>
                    Our digital marketing agency helps businesses grow and
                    succeed online through a range of services including SEO,
                    PPC, social media marketing, and content creation.
                </p>

                <Button
                    variant='primary'
                    href='/register'
                    className='mt-6 w-full sm:w-fit'
                >
                    Book a consultation
                </Button>
            </div>
            <div className='flex-1 hidden sm:flex'>
                <img
                    src='/media/hero.png'
                    alt='Hero Image Desktop'
                    className='hidden sm:flex'
                />
            </div>
        </div>
    </div>
);

export { Hero };
